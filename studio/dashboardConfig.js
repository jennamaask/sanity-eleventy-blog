export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '629ea1f3a28711008c95a654',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-b4azxaaq',
                  apiId: '6fe7a8fe-1aa7-44e9-a48c-34b28c7b5390'
                },
                {
                  buildHookId: '629ea1f3a8b9c500b2a79efe',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-6nn8rgod',
                  apiId: 'da0ec2c0-2691-415a-943f-7e772fea90b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jennamaask/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-6nn8rgod.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
