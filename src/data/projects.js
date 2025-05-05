// src/data/projects.js
/**
 * gallery entries support:
 *  - image item: string URL to an image
 *  - video item: object with
 *      src: Vimeo page URL,
 *      poster: thumbnail image URL
 *
 * Example video entry:
 *   // A gallery can mix image URLs and video objects
 *   gallery: [
 *     '/images/projects/image1.jpg',
 *     { src: 'https://vimeo.com/123456789', poster: '/images/projects/video-thumb.jpg' },
 *   ];
 * To include a Vimeo video, use an object in the gallery:
 *   { src: 'https://vimeo.com/123456789', poster: '/images/projects/video-thumb.jpg' }
 */
export const projects = [
    {
        slug: 'build-a-bear',
        title: 'Build-A-Bear Workshop',
        category: 'Website Design',
        type: 'Landing Page Design',
        description: 'Redesign of the landing page for this toy company.',
        thumbnail: '/images/projects/build-a-bear-thumb.jpg',
        gallery: [
          '/images/projects/build-a-bear-1.jpg',
          '/images/projects/build-a-bear-2.jpg',
          '/images/projects/build-a-bear-3.jpg',
          '/images/projects/build-a-bear-4.jpg'
        ]
      },
    {
      slug: 'digital-promise-verizon',
      title: 'Digital Promise / Verizon',
      category: 'Website Design',
      type: 'Educator Microsite',
      description: 'Educator resource microsite introducing tablets to classrooms across the U.S.',
      thumbnail: '/images/projects/digital-promise-thumb.jpg',
      gallery: [
        '/images/projects/digital-promise-1.jpg',
        '/images/projects/digital-promise-2.jpg',
        '/images/projects/digital-promise-3.jpg',
        '/images/projects/digital-promise-4.jpg'
      ]
    },
    {
      slug: 'beacon',
      title: 'Beacon LBS',
      category: 'Website Design',
      type: 'Healthcare Microsite',
      description: 'A healthcare resource microsite.',
      thumbnail: '/images/projects/beacon-thumb.jpg',
      gallery: [
        '/images/projects/beacon-1.jpg',
        '/images/projects/beacon-2.jpg',
      ]
    },
    {
      slug: 'activehealth',
      title: 'ActiveHealth',
      category: 'Website Design',
      type: 'Healthcare Microsite Landing Page',
      description: 'A healthcare resource microsite.',
      thumbnail: '/images/projects/activehealth-thumb.jpg',
      gallery: [
        '/images/projects/activehealth-1.jpg',
      ]
    },
    {
      slug: 'bullfrog',
      title: 'BullFrog Sunscreen',
      category: 'Website Design',
      type: 'Brand website design',
      description: 'A sunscreen brand website.',
      thumbnail: '/images/projects/bullfrog-thumb.jpg',
      gallery: [
        '/images/projects/bullfrog-1.jpg',
        '/images/projects/bullfrog-2.jpg',
      ]
    },
    {
      slug: 'wsjwine-email',
      title: 'Wall Street Journal Wine Club',
      category: 'Website Design',
      type: 'Email design',
      description: 'Email design for the Wall Street Journal Wine Club.',
      thumbnail: '/images/projects/wsjwine-thumb.jpg',
      gallery: [
        '/images/projects/wsjwine-1.jpg',
        '/images/projects/wsjwine-2.jpg',
      ]
    },
    {
      slug: 'cigna-broker-site',
      title: 'Cigna Broker Website',
      category: 'Website Design',
      type: 'Healthcare Broker Website design',
      description: 'A healthcare broker website.',
      thumbnail: '/images/projects/cigna-broker-site-thumb.jpg',
      gallery: [
        '/images/projects/cigna-broker-site-1.jpg',
        '/images/projects/cigna-broker-site-2.jpg',
        '/images/projects/cigna-broker-site-3.jpg',
        '/images/projects/cigna-broker-site-4.jpg',
      ]
    },
    {
      slug: 'citi-kiosk',
      title: 'Citi Kiosk',
      category: 'Website Design',
      type: 'Financial Services Tradeshow Kiosk',
      description: 'A tradeshow kiosk for Citi.',
      thumbnail: '/images/projects/citi-thumb.jpg',
      gallery: [
        '/images/projects/citi-1.jpg',
        '/images/projects/citi-2.jpg',
      ]
    },
    {
      slug: 'ero',
      title: 'ERO is Now',
      category: 'Website Design',
      type: 'Nutritional Supplement Website',
      description: 'A nutritional supplement website.',
      thumbnail: '/images/projects/ero-thumb.jpg',
      gallery: [
        '/images/projects/ero-1.jpg',
        '/images/projects/ero-2.jpg',
        '/images/projects/ero-3.jpg',
      ]
    },
    {
      slug: 'cjm',
      title: 'CJM Website',
      category: 'Website Design',
      type: 'Financial Management Website',
      description: 'A financial management website.',
      thumbnail: '/images/projects/cjm-thumb.jpg',
      gallery: [
        '/images/projects/cjm-1.jpg',
        '/images/projects/cjm-2.jpg',
        '/images/projects/cjm-3.jpg',
        '/images/projects/cjm-4.jpg',
      ]
    },
    {
      slug: 'san-pellegrino',
      title: 'San Pellegrino Microsite',
      category: 'Website Design',
      type: 'Brand Microsite',
      description: 'A brand microsite for San Pellegrino.',
      thumbnail: '/images/projects/sanpellegrino-thumb.jpg',
      gallery: [
        '/images/projects/sanpellegrino-1.jpg',
      ]
    },
    {
      slug: 'perrier-warhol',
      title: 'Perrier Microsite',
      category: 'Website Design',
      type: 'Brand Microsite',
      description: 'A brand microsite for Perrier.',
      thumbnail: '/images/projects/perrier-thumb.jpg',
      gallery: [
        '/images/projects/perrier-1.jpg',
        '/images/projects/perrier-2.jpg',
        '/images/projects/perrier-3.jpg',
        '/images/projects/perrier-4.jpg',
        '/images/projects/perrier-5.jpg',
        '/images/projects/perrier-6.jpg',
      ]
    },
    {
      slug: 'demo-reel',
      title: 'Demo Reel',
      category: 'Motion Graphics',
      type: 'Self-Promotion',
      description: 'A self-promotion demo reel.',
      thumbnail: '/images/projects/demo-reel-thumb.jpg',
      gallery: [
        { src: 'https://vimeo.com/194894241', poster: '/images/projects/demo-reel-thumb.jpg' },
      ]
    },
    {
      slug: 'nywa-logo',
      title: 'NYWA Logo',
      category: 'Logo Design',
      type: 'Logo Design',
      description: 'Logo design for the Newtown Youth Wrestling Association.',
      thumbnail: '/images/projects/nywa-logo-thumb.jpg',
      gallery: [
        '/images/projects/nywa-logo-1.jpg',
      ]
    },
    {
      slug: 'electricenjin-logo',
      title: 'Electric Enjin Logo',
      category: 'Logo Design',
      type: 'Logo Design',
      description: 'Logo design for Electric Enjin, an internet services company.',
      thumbnail: '/images/projects/electricenjin-logo-thumb.jpg',
      gallery: [
        '/images/projects/electricenjin-logo-1.jpg',
      ]
    },
    {
      slug: 'autismcommunities-logo',
      title: 'Autism Communities Logo',
      category: 'Logo Design',
      type: 'Logo Design',
      description: 'Logo design for Autism Communities, a non-profit organization.',
      thumbnail: '/images/projects/autismcommunities-logo-thumb.jpg',
      gallery: [
        '/images/projects/autismcommunities-logo-1.jpg',
      ]
    },
    {
      slug: 'fortheoutcome-logo',
      title: 'For the Outcome Logo',
      category: 'Logo Design',
      type: 'Logo Design',
      description: 'Logo design for Really Good Stuff, an educational suppliment company.',
      thumbnail: '/images/projects/fortheoutcome-logo-thumb.jpg',
      gallery: [
        '/images/projects/fortheoutcome-logo-1.jpg',
      ]
    },
    {
      slug: 'riverscape-3D',
      title: 'Riverscape 3D',
      category: 'Three.js Animation',
      type: '3D Animation',
      description: 'A self-promotional real-time 3D animation.',
      url: 'https://riverscape.glitch.me/',
      thumbnail: '/images/projects/riverscape-thumb.jpg',
      gallery: [
        '/images/projects/riverscape-1.jpg',
      ]
    },
    {
      slug: 'planetx-3D',
      title: 'Escape from Planet X 3D',
      category: 'Three.js Animation',
      type: '3D Animation',
      description: 'A self-promotional real-time 3D animation.',
      url: 'https://escape-planetx.glitch.me/',
      thumbnail: '/images/projects/planetx-thumb.jpg',
      gallery: [
        '/images/projects/planetx-1.jpg',
      ]
    },
    {
      slug: 'insideout-logo',
      title: 'Inside Out Logo',
      category: 'Logo Design',
      type: 'Logo Design',
      description: 'Logo design for Inside Out Tee Shirts',
      thumbnail: '/images/projects/insideout-logo-thumb.jpg',
      gallery: [
        '/images/projects/insideout-logo-1.jpg',
      ]
    },
    {
      slug: 'beiersdorf-video',
      title: 'Beiersdorf Video',
      category: 'Motion Graphics',
      type: 'Corporate Video',
      description: 'Corporate video for Beiersdorf, a skincare company.',
      thumbnail: '/images/projects/beiersdorf-video-thumb.jpg',
      gallery: [
        { src: 'https://vimeo.com/1081501511', poster: '/images/projects/beiersdorf-video-1.jpg' },
      ]
    },
    {
      slug: 'symtrain-landingpage',
      title: 'Symtrain Landing Page Design',
      category: 'Website Design',
      type: 'Brand Website',
      description: 'Landing page design for Symtrain, a training company.',
      thumbnail: '/images/projects/symtrain-website-thumb.jpg',
      gallery: [
        '/images/projects/symtrain-website-1.jpg',
      ]
    },
    {
      slug: 'gbb-logo',
      title: 'The Grennan Brothers Band Logo',
      category: 'Logo Design',
      type: 'Logo Design',
      description: 'Logo design for The Grennan Brothers Band, a band from Newtown, CT.',
      thumbnail: '/images/projects/gbb-logo-thumb.jpg',
      gallery: [
        '/images/projects/gbb-logo-1.jpg',
      ]
    },
    {
      slug: 'breakout-video',
      title: 'Breakout Demo Video',
      category: 'Motion Graphics',
      type: 'Breakout Video',
      description: 'Self-promotion demo of a breakout video for LinkedIn.',
      thumbnail: '/images/projects/breakout-demo-thumb.jpg',
      gallery: [
        { src: 'https://vimeo.com/1081550423', poster: '/images/projects/breakout-demo-1.jpg' },
      ]
    },
    // add the rest...https://vimeo.com/1081550423?share=copy#t=0

  ];
