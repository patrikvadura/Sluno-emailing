module.exports = {
  build: {
    templates: {
      destination: {
        path: 'output/production/desktop',
      },
    },
  },
  locals: {
    showInBrowser: 'https://czechvisual.space/sluno/newsletter/production/desktop/newsletter'
  },
  inlineCSS: true,
  removeUnusedCSS: true,
  prettify: true,
  baseURL: {
    url: 'https://czechvisual.space/sluno/newsletter/production/desktop/',
    tags: ['img'],
  },
}
