module.exports = {
  build: {
    templates: {
      destination: {
        path: 'output/staging/mailchimp',
      },
    },
  },
  locals: {
    showInBrowser: 'https://czechvisual.space/sluno/newsletter/staging/mailchimp/newsletter'
  },
  inlineCSS: true,
  removeUnusedCSS: true,
  prettify: true,
  baseURL: {
    url: 'https://czechvisual.space/sluno/newsletter/staging/mailchimp/',
    tags: ['img'],
  },
}
