module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Zebo.ai',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ground breaking advances in medical ai comming soon' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'vee-validate'
    ],
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  plugins: [
    { src: '~/plugins/scroll-spy.js', ssr: false },
    { src: '~/plugins/smooth-scroll.js', ssr: false },
    '~/plugins/vee-validate.js',
    { src: '~/plugins/vuetyper.js', ssr: false }
  ]
}
