export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6098533e8bc99f5d72b903c8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-z39ptndv',
                  apiId: '6fc18018-7681-4dbf-92a9-58240597564a'
                },
                {
                  buildHookId: '6098533e7bf753360d4bb11b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vkbru74y',
                  apiId: '1a0c4986-1038-44de-b7ab-ac21c40524dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChrisReutter/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vkbru74y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
