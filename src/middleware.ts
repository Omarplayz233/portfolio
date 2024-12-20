import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request, response }) => {
  // Define your redirect rules
  const redirects: Record<string, string> = {
    '/royalpear': 'https://youtube.com/@RoyalPear',
    '/royalpear/': 'https://youtube.com/@RoyalPear',
    '/pearify': 'https://chromewebstore.google.com/detail/youtube-pearify/jafognbanchcefpohggjafiolgfddbmd?authuser=0&hl=en',
    '/pearify/': 'https://chromewebstore.google.com/detail/youtube-pearify/jafognbanchcefpohggjafiolgfddbmd?authuser=0&hl=en',
    '/pearify-firefox': 'https://addons.mozilla.org/en-GB/firefox/addon/youtube-pearify/',
    '/pearify-firefox/': 'https://addons.mozilla.org/en-GB/firefox/addon/youtube-pearify/',
  };

  // Check if the request matches a redirect
  const redirectUrl = redirects[new URL(request.url).pathname];
  if (redirectUrl) {
    return new Response(null, {
      status: 301,
      headers: {
        Location: redirectUrl,
      },
    });
  }

  // If no redirect matches, proceed normally
  return response.next();
};

