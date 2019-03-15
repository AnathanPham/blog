module.exports = {
  base: '/vuepress-demo/',
  title: '前端矿工',
  description: 'test vuepress',
  head: [
    ['title', '前端矿工']
  ],
  host: '0.0.0.0',
  port: '8080',
  themeConfig: {
    repo: 'AFu-1993/vuepress-demo',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    sidebar: [
      {
        title: '关于',
        collapsable: false,
        children: [
          ['about/', '简介'],
          'about/skill'
        ]
      }
    ]
  }
}