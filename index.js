
// @ts-check

const tags = {

  // section type
  news: { id: 'news', name: 'News' },
  events: { id: 'events', name: 'Events' },
  resources: { id: 'resources', name: 'Resources' },
  recruitment: { id: 'recruitment', name: 'Recruitment' },

  // entity type
  team: { id: 'team', name: 'Team' },
  company: { id: 'company', name: 'Company' },
  community: { id: 'community', name: 'Community' },
  association: { id: 'association', name: 'Association' },
  organization: { id: 'organization', name: 'Organization' },
  government: { id: 'government', name: 'Government' },

  // investor type
  angel: { id: 'angel', name: 'Angel' },
  syndicate: { id: 'syndicate', name: 'Syndicate' },
  incubator: { id: 'incubator', name: 'Incubator' },
  accelerator: { id: 'accelerator', name: 'Incubator' },
  venture_capital: { id: 'venture_capital', name: 'Venture Capital' },

  // resource type
  blog: { id: 'blog', name: 'Blog' },
  video: { id: 'video', name: 'Video' },
  podcast: { id: 'podcast', name: 'Podcast' },

};

const data = {
  sections: [
    {
      name: 'Communities',
      items: [
        {
          name: 'Startup PH',
          description: 'For news, events, discussions, etc.',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/219324261492180' },
            { name: 'ClubHouse', href: 'https://www.clubhouse.com/club/startup-ph' }
          ]
        },
        {
          name: 'Sinigang Valley',
          description: 'A community, and a tech hub.',
          links: [
            { name: 'Website', href: 'https://www.sinigangvalley.com/' },
            { name: 'Twitter', href: 'https://twitter.com/sinigangvalley' },
            { name: 'Facebook', href: 'https://www.facebook.com/sinigangvalleyph' },
            { name: 'Instagram', href: 'https://www.instagram.com/sinigangvalley/' },
            { name: 'ClubHouse', href: 'https://www.clubhouse.com/club/sinigang-valley'}
          ]
        }
      ]
    },
    {
      name: 'Associations, Organizations',
      items: []
    }
  ]
}

console.log({ data });

const content = document.getElementById('content');
const section = document.createElement('div')
section.classList.add('section');