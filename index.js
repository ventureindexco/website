
// @ts-check

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
    }
  ]
}

console.log({ data });

const content = document.getElementById('content');
const section = document.createElement('div')
section.classList.add('section');