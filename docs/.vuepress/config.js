module.exports = {
  base: '/',
  title: 'title-hbs',
  description: 'test vuepress',
  // head: ['script', { src: '/js/hello.js' }],
  // host: '0.0.0.0',
  // port: '8080',
  dest: '../dist',
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'baidu', link: 'www.baidu.com' },
          { text: 'local', link: 'localhost:8080/' }
        ]
      }
    ],
    sidebar: [
      ['/', 'home'],
      ['firstday/moning', 'fffffirst'],
    ]
  }
}