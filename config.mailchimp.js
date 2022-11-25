module.exports = {
  build: {
    templates: {
      destination: {
        path: 'output/production/mailchimp',
      },
    },
  },
  locals: {
    showInBrowser: 'https://czechvisual.space/sluno/newsletter/production/mailchimp/newsletter'
  },
  inlineCSS: true,
  removeUnusedCSS: true,
  prettify: true,
  baseURL: {
    url: 'https://czechvisual.space/sluno/newsletter/production/mailchimp/',
    tags: ['img'],
  },
}
