module.exports = {
  base: '/resume/',
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
      },{
        title:'数据结构',
        collapsable: false,
        children:[
          ['data-structure/','介绍'],
          'data-structure/section-1'
        ]
      }
    ]
  }
}