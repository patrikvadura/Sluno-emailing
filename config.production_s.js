module.exports = {
  build: {
    templates: {
      destination: {
        path: 'output/staging/desktop',
      },
    },
  },
  locals: {
    showInBrowser: 'https://czechvisual.space/sluno/newsletter/staging/desktop/newsletter'
  },
  inlineCSS: true,
  removeUnusedCSS: true,
  prettify: true,
  baseURL: {
    url: 'https://czechvisual.space/sluno/newsletter/staging/desktop/',
    tags: ['img'],
  },
}
