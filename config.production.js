module.exports = {
  build: {
    templates: {
      destination: {
        path: 'output',
      },
    },
  },
  locals: {
    showInBrowser: 'https://czechvisual.space/sluno/newsletter/newsletter'
  },
  inlineCSS: true,
  removeUnusedCSS: true,
  prettify: true,
  baseURL: {
    url: 'https://czechvisual.space/sluno/newsletter/',
    tags: ['img'],
  },
}
