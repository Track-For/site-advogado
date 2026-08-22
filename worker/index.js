// Worker mínimo para servir os arquivos pré-renderizados no Cloudflare Sites.
export default {
  async fetch(request, env) {
    if (!env.ASSETS) {
      return new Response('Static asset binding unavailable.', { status: 503 });
    }

    const directResponse = await env.ASSETS.fetch(request);
    if (directResponse.status !== 404) return directResponse;

    const url = new URL(request.url);
    if (!url.pathname.includes('.')) {
      const nestedUrl = new URL(url);
      nestedUrl.pathname = `${url.pathname.replace(/\/$/, '')}/index.html`;
      const nestedResponse = await env.ASSETS.fetch(new Request(nestedUrl, request));
      if (nestedResponse.status !== 404) return nestedResponse;

      const homeUrl = new URL('/index.html', url);
      return env.ASSETS.fetch(new Request(homeUrl, request));
    }

    return directResponse;
  },
};
