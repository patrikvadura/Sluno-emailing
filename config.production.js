module.exports = {
  build: {
    templates: {
      destination: {
        path: 'output/production',
      },
    },
  },
  inlineCSS: true,
  removeUnusedCSS: true,
  prettify: true,
  baseURL: {
    url: 'https://czechvisual.github.io/Sluno-emailing/output/production/',
    tags: ['img']
  }
}
