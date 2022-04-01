
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
            { name: 'Twitter Community', href: 'https://twitter.com/i/communities/1471859452961640448' }
          ]
        },

        {
          name: 'Philippine TBIs',
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
          name: 'Startup PH: Community Builders',
          description: 'If you like building, and if you like communities..',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/startupphcb/' },
          ]
        },

        {
          name: 'Startup Events Philippines',
          description: 'Startup-related events obviously.',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/1197052960315273/' },
          ]
        },

        {
          name: 'Product PH',
          description: 'For planning, building, and launching products.',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/ProductPH/' },
          ]
        },

        {
          name: 'Startup PH: Marketing',
          description: 'Marketing, marketing, marketing..',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/342788319414143/' },
          ]
        },

        {
          name: 'Hackathon Hub Philippines',
          description: 'For developers and designers looking to compete.',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/philippinehackathons/' },
          ]
        },

        {
          name: 'BlockchainSpace Philippines',
          description: 'For blockchain and crypto stuff.',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/blockchainspaceph/' },
          ]
        }

      ]
    },
    {
      name: 'Video',
      items: [

        {
          name: 'Philippine Startup Week',
          description: '-',
          links: [
            { name: 'Website', href: 'https://www.phstartupweek.com/' },
            { name: 'YouTube', href: 'https://www.youtube.com/c/PhilippineStartupWeek' },
          ]
        },

        {
          name: 'The Final Pitch',
          description: '-',
          links: [
            { name: 'Website', href: 'https://thefinalpitch.ph/' },
            { name: 'YouTube', href: 'https://www.youtube.com/channel/UCBa9gQ-bKTKQgYdfBEltohA' },
          ]
        }

      ]
    },
    {
      name: 'Audio',
      items: [

        {
          name: 'Hustleshare Podcast',
          description: 'Hosted by Ron Baetong.',
          links: [
            { name: 'Website', href: 'https://www.hustleshare.com/' },
            { name: 'Facebook', href: 'https://www.facebook.com/hustleshare' },
            { name: 'Spotify', href: 'https://open.spotify.com/show/6fPsNbi8m8mCIyGZH1YGm1' },
            { name: 'Apple', href: 'https://podcasts.apple.com/ph/podcast/hustleshare/id1453894361' },
          ]
        },
        {
          name: 'The RJ Ledesma Podcast',
          description: 'Hosted by RJ Ledesma.',
          links: [
            { name: 'Facebook', href: 'https://www.facebook.com/rjledesmapodcast' },
            { name: 'Spotify', href: 'https://open.spotify.com/show/5KEdheZOjNCcAOvXvSbd8U' },
            { name: 'Apple', href: 'https://podcasts.apple.com/ph/podcast/the-rj-ledesma-podcast/id1526434916' },
          ]
        },
        {
          name: 'Start Up Podcast',
          description: 'Hosted by Janni Boydon.',
          links: [
            { name: 'Facebook', href: 'https://www.facebook.com/startuppodcastph' },
            { name: 'YouTube', href: 'https://www.youtube.com/channel/UC3OM1fve7rqc7bKM1hQxdWg' },
            { name: 'Spotify', href: 'https://open.spotify.com/show/6BObuPvMfoZzdlJeb1XXVa' },
            { name: 'Apple', href: 'https://podcasts.apple.com/us/podcast/start-up-podcast/id1576462394' },
          ]
        },
        {
          name: 'Branding with PB',
          description: 'Hosted by Phoebe Añasco.',
          links: [
            { name: 'Website', href: 'https://thepbanasco.com/' },
            { name: 'Spotify', href: 'https://open.spotify.com/show/2GFRFNJElScviPc6wzme4b' },
          ]
        },
        {
          name: 'Global Ideas',
          description: 'Hosted by Makati Business Club.',
          links: [
            { name: 'Spotify', href: 'https://open.spotify.com/show/5db8xLdo6nXh7wPWQjK7LN' },
            { name: 'Apple', href: 'https://podcasts.apple.com/ph/podcast/global-ideas-an-mbc-podcast/id1613864287' },
          ]
        }
      ]
    },
    {
      name: 'Recruitment',
      items: [
        {
          name: 'Startup PH Jobs',
          description: '-',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/277534272382470' },
          ]
        },
        {
          name: 'Tech & Startup Jobs PH',
          description: '-',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/450750702024985/' },
          ]
        },
        {
          name: 'Startup Philippines: Internships',
          description: '-',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/startupphilippinesinternships/' },
          ]
        },
        {
          name: 'Internships.ph (Philippines)',
          description: '-',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/bloguniverse/' },
          ]
        }
      ]
    },
    {
      name: 'Coworking',
      items: [
        {
          name: 'coworkingspacesPH',
          description: '-',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/1858909440797720/' },
          ]
        },
        {
          name: 'Coworking Spaces PH',
          description: '-',
          links: [
            { name: 'Facebook Group', href: 'https://www.facebook.com/groups/coworkingspacesph/' },
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
      section_item_list_item_link_element.innerText = `• ${link.name}`;
      section_item_list_item_link_element.target = '_blank';
      section_item_list_item_link_element.href = link.href;
      section_item_list_item_element.append(section_item_list_item_link_element);

    });
  });
});