module.exports = {
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
      assets: {
        source: 'src/images',
        destination: 'images',
      },
    },
    components: {
      root: './src/components'
    }
  },
  baseURL: {
    url: 'https://czechvisual.github.io/Sluno-emailing/output/production/'
  }
}
