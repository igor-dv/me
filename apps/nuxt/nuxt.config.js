const path = require('path');

module.exports = {
  router: {
    base: '/nuxt/',
  },
  modulesDir: path.resolve(__dirname, '../../node_modules/'),
  head: {
    title: 'ig0r.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ig0r.me with nuxt' },
      { name: 'keywords', content: 'home, profile' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/nuxt/favicon.png' }],
  },
  loading: { color: '#800b6d' },
  build: {},
};
