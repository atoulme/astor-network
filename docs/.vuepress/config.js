module.exports = {
  title: 'astor.host',
  description: 'Astor Network Resources',
  themeConfig: {
    nav: [
      { text: 'astor.host', link: '/' },
      { text: 'Motivation', link: '/motivation/' },
      { text: 'Mine', link: '/mine/' },
      { text: 'Node', link: '/node/' },
      { text: 'Explore', link: '/explore/' }
    ]
  },
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,maximum-scale=1'}],
    ['link', {rel: 'icon', type: 'image/png', href: 'favicon.png'}]
  ],
  markdown: {
    anchor: { permalinkSymbol: '↳' }
  }
}
