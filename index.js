
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
          description: 'Lots of people in here, just get in.',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/219324261492180' },
            { name: 'ClubHouse', href: 'https://www.clubhouse.com/club/startup-ph' }
          ]
        },

        {
          name: 'Sinigang Valley',
          description: 'A community and a tech hub in Poblacion.',
          links: [
            { name: 'Website', href: 'https://www.sinigangvalley.com/' },
            { name: 'Twitter', href: 'https://twitter.com/sinigangvalley' },
            { name: 'Facebook', href: 'https://www.facebook.com/sinigangvalleyph' },
            { name: 'Instagram', href: 'https://www.instagram.com/sinigangvalley/' },
            { name: 'ClubHouse', href: 'https://www.clubhouse.com/club/sinigang-valley'}
          ]
        },

        {
          name: 'Startup Philippines',
          description: 'An invite-only community, just DM Francis.',
          links: [
            { name: 'Twitter Community Invitation', href: 'https://twitter.com/fplaza/status/1471860695314567173' },
            { name: 'Twitter Community', href: 'https://twitter.com/i/communities/1471859452961640448' },
          ]
        },

        {
          name: 'Philippine TBIs (Technology Business Incubators)',
          description: 'For incubators I guess.',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/415694698844734/' }, 
          ]
        },

        {
          name: 'Startup PH: (Cebu/Bisdak) Community',
          description: 'For those within the queen city of the south.',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/1119146058126032/' }, 
          ]
        },

        {
          name: 'XXX',
          description: 'XXX',
          links: [
            { name: 'XXX', href: 'XXX' }, 
          ]
        }

      ]
    }
  ]
};

console.log({ data });

const content_element = document.getElementById('content');

data.sections.forEach((section) => {

  const section_element = document.createElement('div')
  section_element.classList.add('section');
  content_element.append(section_element);

  const section_title_element = document.createElement('div')
  section_title_element.classList.add('section-title');
  section_title_element.innerText = section.name;
  section_element.append(section_title_element);
  
  const section_items_element = document.createElement('div')
  section_items_element.classList.add('section-items');
  section_element.append(section_items_element);

  section.items.forEach((item) => {

    const section_item_element = document.createElement('div')
    section_item_element.classList.add('section-item');
    section_items_element.append(section_item_element);

    const section_item_title_element = document.createElement('div')
    section_item_title_element.classList.add('section-item-title');
    section_item_title_element.innerText = item.name;
    section_item_element.append(section_item_title_element);

    const section_item_description_element = document.createElement('div')
    section_item_description_element.classList.add('section-item-description');
    section_item_description_element.innerText = item.description;
    section_item_element.append(section_item_description_element);

    const section_item_list_element = document.createElement('ul')
    section_item_element.append(section_item_list_element);

    item.links.forEach((link) => {

      const section_item_list_item_element = document.createElement('li')
      section_item_list_element.append(section_item_list_item_element);
      
      const section_item_list_item_link_element = document.createElement('a')
      section_item_list_item_link_element.classList.add('section-item-link');
      section_item_list_item_link_element.innerText = link.name;
      section_item_list_item_link_element.target = '_blank';
      section_item_list_item_link_element.href = link.href;
      section_item_list_item_element.append(section_item_list_item_link_element);

    });
  });
});