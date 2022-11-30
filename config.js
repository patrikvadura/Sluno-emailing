module.exports = {
  build: {
    doctype: 'html',
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
  }
}
