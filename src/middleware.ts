import type { APIContext, MiddlewareHandler, MiddlewareNext } from 'astro';
// Enregistre les paires de slugs blog FR↔EN (hreflang / sélecteur de langue).
import '@/data/posts';

/**
 * Vercel sert le fallback 404.html pour les URLs inconnues.
 * Pour les chemins /en/*, on réécrit la réponse avec la page /404/ (même URL canonique qu’en FR)
 * tout en conservant le statut 404. La langue EN est signalée via locals.notFoundLang.
 */
async function withLocalized404(context: APIContext, next: MiddlewareNext) {
  const response = await next();
  if (response.status !== 404) return response;

  const pathname = context.url.pathname;
  if (!pathname.startsWith('/en/')) return response;

  context.locals.notFoundLang = 'en';
  const rewritten = await context.rewrite('/404/');
  const headers = new Headers(rewritten.headers);
  headers.delete('content-length');

  return new Response(rewritten.body, {
    status: 404,
    statusText: 'Not Found',
    headers,
  });
}

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = context.url;
  const pathname = url.pathname;

  // /fr/* → /* (l'ancien préfixe de locale n'existe plus depuis prefixDefaultLocale: false)
  if (pathname === '/fr' || pathname === '/fr/') {
    return context.redirect('/', 301);
  }
  if (pathname.startsWith('/fr/')) {
    const target = pathname.replace(/^\/fr/, '') || '/';
    const targetWithSlash = target.endsWith('/') || target.includes('.') ? target : `${target}/`;
    const redirectUrl = new URL(targetWithSlash, url.origin);
    // Préserve la query string
    redirectUrl.search = url.search;
    return context.redirect(redirectUrl.toString(), 301);
  }

  // Routes legacy AFVL : URLs exactes .htm (réécriture vers pages Astro)
  if (pathname === '/about.htm' || pathname === '/about.htm/') {
    return context.rewrite('/about/');
  }
  if (pathname === '/photos.htm' || pathname === '/photos.htm/') {
    return context.rewrite('/photos/');
  }
  // /about.htm et /photos.htm sont EN-only : plus de miroir /en/*
  if (
    pathname === '/en/about.htm' ||
    pathname === '/en/about.htm/' ||
    pathname === '/en/about' ||
    pathname === '/en/about/'
  ) {
    return context.redirect('/about.htm', 301);
  }
  if (
    pathname === '/en/photos.htm' ||
    pathname === '/en/photos.htm/' ||
    pathname === '/en/photos' ||
    pathname === '/en/photos/'
  ) {
    return context.redirect('/photos.htm', 301);
  }
  if (pathname === '/about') {
    return context.redirect('/about.htm', 301);
  }
  if (pathname === '/photos') {
    return context.redirect('/photos.htm', 301);
  }

  // Anciennes URLs /blog/… des guides → URLs racine (et alias courts)
  const guideRedirects: Record<string, string> = {
    '/blog/se-marier-eglise-catholique-italie': '/se-marier-eglise-catholique-italie/',
    '/blog/se-marier-eglise-catholique-italie/': '/se-marier-eglise-catholique-italie/',
    '/blog/documents-mariage-religieux-etranger': '/documents-mariage-religieux-etranger/',
    '/blog/documents-mariage-religieux-etranger/': '/documents-mariage-religieux-etranger/',
    '/blog/cout-mariage-italie': '/cout-mariage-italie/',
    '/blog/cout-mariage-italie/': '/cout-mariage-italie/',
    '/blog/wedding-planner-mariage-italie': '/wedding-planner-mariage-italie/',
    '/blog/wedding-planner-mariage-italie/': '/wedding-planner-mariage-italie/',
    '/blog/marier-a-la-basilique-saint-pierre': '/marier-a-la-basilique-saint-pierre/',
    '/blog/marier-a-la-basilique-saint-pierre/': '/marier-a-la-basilique-saint-pierre/',
    '/mariage-catholique-italie': '/se-marier-eglise-catholique-italie/',
    '/mariage-catholique-italie/': '/se-marier-eglise-catholique-italie/',
    '/blog/voyage-italie-catholique': '/voyage-italie-catholique/',
    '/blog/voyage-italie-catholique/': '/voyage-italie-catholique/',
    '/blog/visiter-le-vatican': '/visiter-le-vatican/',
    '/blog/visiter-le-vatican/': '/visiter-le-vatican/',
    '/blog/musees-du-vatican-billets': '/musees-du-vatican-billets/',
    '/blog/musees-du-vatican-billets/': '/musees-du-vatican-billets/',
    '/blog/basilique-saint-pierre': '/basilique-saint-pierre/',
    '/blog/basilique-saint-pierre/': '/basilique-saint-pierre/',
    '/blog/pelerinage-rome-italie': '/pelerinage-rome-italie/',
    '/blog/pelerinage-rome-italie/': '/pelerinage-rome-italie/',
    '/blog/lune-de-miel-italie': '/lune-de-miel-italie/',
    '/blog/lune-de-miel-italie/': '/lune-de-miel-italie/',
    '/blog/itineraire-rome-3-jours': '/itineraire-rome-3-jours/',
    '/blog/itineraire-rome-3-jours/': '/itineraire-rome-3-jours/',
    '/en/blog/getting-married-catholic-church-italy': '/en/getting-married-catholic-church-italy/',
    '/en/blog/getting-married-catholic-church-italy/': '/en/getting-married-catholic-church-italy/',
    '/en/blog/documents-religious-marriage-abroad': '/en/documents-religious-marriage-abroad/',
    '/en/blog/documents-religious-marriage-abroad/': '/en/documents-religious-marriage-abroad/',
    '/en/blog/cost-wedding-italy': '/en/cost-wedding-italy/',
    '/en/blog/cost-wedding-italy/': '/en/cost-wedding-italy/',
    '/en/blog/wedding-planner-italy': '/en/wedding-planner-italy/',
    '/en/blog/wedding-planner-italy/': '/en/wedding-planner-italy/',
    '/en/blog/getting-married-st-peters-basilica': '/en/getting-married-st-peters-basilica/',
    '/en/blog/getting-married-st-peters-basilica/': '/en/getting-married-st-peters-basilica/',
    '/en/catholic-wedding-italy': '/en/getting-married-catholic-church-italy/',
    '/en/catholic-wedding-italy/': '/en/getting-married-catholic-church-italy/',
    '/en/blog/catholic-travel-italy': '/en/catholic-travel-italy/',
    '/en/blog/catholic-travel-italy/': '/en/catholic-travel-italy/',
    '/en/blog/visiting-the-vatican': '/en/visiting-the-vatican/',
    '/en/blog/visiting-the-vatican/': '/en/visiting-the-vatican/',
    '/en/blog/vatican-museums-tickets': '/en/vatican-museums-tickets/',
    '/en/blog/vatican-museums-tickets/': '/en/vatican-museums-tickets/',
    '/en/blog/st-peters-basilica': '/en/st-peters-basilica/',
    '/en/blog/st-peters-basilica/': '/en/st-peters-basilica/',
    '/en/blog/pilgrimage-rome-italy': '/en/pilgrimage-rome-italy/',
    '/en/blog/pilgrimage-rome-italy/': '/en/pilgrimage-rome-italy/',
    '/en/blog/honeymoon-italy': '/en/honeymoon-italy/',
    '/en/blog/honeymoon-italy/': '/en/honeymoon-italy/',
    '/en/blog/rome-3-day-itinerary': '/en/rome-3-day-itinerary/',
    '/en/blog/rome-3-day-itinerary/': '/en/rome-3-day-itinerary/',
  };
  if (guideRedirects[pathname]) {
    return context.redirect(guideRedirects[pathname], 301);
  }

  // /sitemap → sitemap.xml (indexation), redirections permanentes en 301
  if (pathname === '/sitemap' || pathname === '/sitemap/') {
    return context.redirect('/sitemap.xml', 301);
  }

  if (pathname === '/sitemap.html' || pathname === '/sitemap.html/') {
    return context.redirect('/plan-du-site/', 301);
  }
  // Recherche : slugs traduits FR/EN
  if (pathname === '/search' || pathname === '/search/') {
    return context.redirect('/en/search/', 301);
  }
  if (pathname === '/en/recherche' || pathname === '/en/recherche/') {
    return context.redirect('/en/search/', 301);
  }
  // Plan du site EN : slug traduit /en/site-map/ (+ alias historiques)
  if (
    pathname === '/en/plan-du-site' ||
    pathname === '/en/plan-du-site/' ||
    pathname === '/en/sitemap' ||
    pathname === '/en/sitemap/' ||
    pathname === '/en/sitemap.html' ||
    pathname === '/en/sitemap.html/'
  ) {
    return context.redirect('/en/site-map/', 301);
  }
  // Ancien slug FR réutilisé sous /en/blog/ (hreflang erroné avant paire EN)
  if (
    pathname === '/en/blog/marier-a-la-basilique-saint-pierre' ||
    pathname === '/en/blog/marier-a-la-basilique-saint-pierre/'
  ) {
    return context.redirect('/en/getting-married-st-peters-basilica/', 301);
  }
  if (pathname === '/en/a-propos' || pathname === '/en/a-propos/') {
    return context.redirect('/about.htm', 301);
  }
  // Skeleton /a-propos/ → URL publique AFVL legacy
  if (pathname === '/a-propos' || pathname === '/a-propos/') {
    return context.redirect('/about.htm', 301);
  }
  // Ancienne page skeleton Services (contenu placeholder) → accueil
  if (pathname === '/services' || pathname === '/services/') {
    return context.redirect('/', 301);
  }
  if (pathname === '/en/services' || pathname === '/en/services/') {
    return context.redirect('/en/', 301);
  }
  // Destinations FR-only : pas de miroir /en/destinations/* (évite 404)
  if (pathname === '/en/destinations' || pathname === '/en/destinations/') {
    return context.redirect('/destinations/rome/', 301);
  }
  if (pathname.startsWith('/en/destinations/')) {
    const target = pathname.replace(/^\/en/, '');
    const targetWithSlash = target.endsWith('/') ? target : `${target}/`;
    return context.redirect(targetWithSlash, 301);
  }
  if (pathname === '/en/404' || pathname === '/en/404/') {
    return context.redirect('/404/', 301);
  }

  // Endpoints *.xml / *.txt : la route Astro correspond au nom de fichier
  // (sans slash final). On laisse le routeur Astro les servir directement.
  // Pas de réécriture middleware pour éviter les boucles / incompatibilités v7.

  if (pathname.startsWith('/api/') || pathname.startsWith('/_')) {
    return next();
  }

  if (pathname === '/' || pathname.endsWith('/') || pathname.includes('.')) {
    return withLocalized404(context, next);
  }

  // Ajoute un slash final (trailingSlash: 'always') pour les routes HTML.
  const redirectUrl = new URL(url);
  redirectUrl.pathname = `${pathname}/`;

  return new Response(null, {
    status: 301,
    headers: {
      Location: redirectUrl.toString(),
    },
  });
};
