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
      slug: 'festival-booth',
      title: 'Painted Paths - Festival Booth Design',
      category: 'Environmental Design',
      type: 'Exhibition Design',
      description: 'A festival booth design for an artist’s exhibition of original paintings.',
      thumbnail: '/images/projects/boothoctober-thumb.jpg',
      gallery: [
        '/images/projects/boothoctober-1.jpg',
        '/images/projects/boothoctober-2.jpg',
        { src: 'https://vimeo.com/1242562896', poster: '/images/projects/stump-video-thumb.jpg' },
      ]
    },{
      slug: 'demo-reel',
      title: 'Demo Reel',
      category: 'Motion Graphics',
      type: 'Self-Promotion',
      description: 'A selection of 3D work, brought together in motion.',
      thumbnail: '/images/projects/demo-reel-thumb.jpg',
      gallery: [
        { src: 'https://vimeo.com/194894241', poster: '/images/projects/demo-reel-thumb.jpg' },
      ]
    },
  {
      slug: 'the-gallery',
      title: 'Painted Paths — Interactive Art Gallery',
      category: 'Three.js Environments',
      type: '3D E-Commerce Experience',
      description: 'An online exhibition connecting my original acrylic paintings with an interactive 3D gallery and augmented-reality artwork viewing.',
      url: 'https://paintedpaths.studio/experience/',
      thumbnail: '/images/projects/env-project-17-thumbnail.jpg',
      gallery: [
        '/images/projects/env-project-17-gallery-6.jpg',
        '/images/projects/env-project-17-gallery-2.jpg',
        '/images/projects/env-project-17-gallery-3.jpg',
        '/images/projects/env-project-17-gallery-9.jpg',
      ]
    },
  {
      slug: 'the-factory',
      title: 'The Factory — Art Community Concept',
      category: 'Three.js Environments',
      type: '3D Animation',
      description: 'An independent exploration of a real-time 3D environment conceived as a gathering place for an art community.',
      url: 'https://main.dp50w2vzohoj1.amplifyapp.com/',
      thumbnail: '/images/projects/factory-thumb.jpg',
      gallery: [
        '/images/projects/factory-1.jpg',
        '/images/projects/factory-2.jpg',
        '/images/projects/factory-3.jpg',
        '/images/projects/factory-4.jpg',
      ]
    },
 {
      slug: '3D-music-room',
      title: 'MusicSpace — A Place to Listen',
      category: 'Three.js Environments',
      type: '3D Music Experience',
      description: 'A browser-based 3D listening environment exploring the relationship between music, atmosphere, and spatial design.',
      url: 'https://main.d1dejm6fbp1yzl.amplifyapp.com/',
      thumbnail: '/images/projects/musicroom-thumb.jpg',
      gallery: [
        '/images/projects/musicroom-1.jpg',
        '/images/projects/musicroom-2.jpg',
        '/images/projects/musicroom-3.jpg',
      ]
    },
    {
      slug: '3D-box',
      title: 'Beyond the Default Cube',
      category: 'Three.js Environments',
      type: '3D Audio-Visual Experiment',
      description: 'My take on the default cube in Three.js.',
      url: 'https://main.d3qvqtwcvdx5r7.amplifyapp.com/',
      thumbnail: '/images/projects/3D-box-thumb.jpg',
      gallery: [
        '/images/projects/3D-box-1.jpg',
        '/images/projects/officeobject.svg',
        //'/images/projects/officeobject_diffuseOriginal.png',
        '/images/projects/officeobject_emission_spritesheet.png',
      ]
    },
    {
      slug: 'show-booth-design',
      title: 'Starter Sportswear - Trade Show Booth Design',
      category: 'Environmental Design',
      type: 'I had this unique assignment to collaborate with a trade show booth design company to create a booth for Starter Sportswear. I was responsible for the spatial layout, graphics, and immersive visual and audible elements of the booth. The design aimed to create an engaging and memorable experience for visitors, showcasing Starter´s brand identity and products in a dynamic way.',
      description: 'Starter Sportswear trade show booth design, including spatial layout, graphics, and immersive visual and audible elements.',
      url: '',
      thumbnail: '/images/projects/starterbooth-design-thumb.jpg',
      gallery: [
        '/images/projects/starterbooth_original1996.jpg',
        '/images/projects/starterbooth_frontSketch.jpg',
        '/images/projects/starterbooth_front.jpg',
        '/images/projects/starterbooth_vin01.jpg',
        '/images/projects/starterbooth_vin02.jpg',
        '/images/projects/starterbooth_vin03.jpg',
        '/images/projects/starterbooth_vin04.jpg',
      ]
    },
    {
      slug: 'temple-environment',
      title: 'Temple — First-Person Environment',
      category: 'Three.js Environments',
      type: '3D Environment',
      description: 'An independent environment study exploring a temple setting through first-person navigation.',
      url: 'https://avatar.d1el9mu5mpb6mg.amplifyapp.com/',
      thumbnail: '/images/projects/temple-environment-thumb.jpg',
      gallery: [
        '/images/projects/temple-environment-1.jpg',
        '/images/projects/temple-environment-2.jpg',
        '/images/projects/temple-environment-3.jpg',
      ]
    },
    {
      slug: '3D-Model-Viewer',
      title: 'Browser-Based 3D Model Viewer',
      category: 'Three.js Environments',
      type: '3D Environment',
      description: 'An interactive model-viewing experiment exploring how 3D objects can be presented on the web.',
      url: 'https://main.dl7efti2owph.amplifyapp.com/',
      thumbnail: '/images/projects/3D-model-viewer-thumb.jpg',
      gallery: [
        '/images/projects/3D-model-viewer-1.jpg',
        '/images/projects/3D-model-viewer-2.jpg',
        '/images/projects/3D-model-viewer-3.jpg',
      ]
    },
    {
      slug: 'cigna-broker-site',
      title: 'Cigna Broker Website',
      category: 'Website Design',
      type: 'Healthcare Broker Website design',
      description: 'Responsive website redesign for Cigna’s broker resource library, developed within established brand guidelines.',
      thumbnail: '/images/projects/cigna-broker-site-thumb.jpg',
      gallery: [
        '/images/projects/cigna-broker-site-1.jpg',
        '/images/projects/cigna-broker-site-2.jpg',
        '/images/projects/cigna-broker-site-3.jpg',
        '/images/projects/cigna-broker-site-4.jpg',
      ]
    },
    {
      slug: 'san-pellegrino',
      title: 'San Pellegrino Microsite',
      category: 'Website Design',
      type: 'Brand Microsite',
      description: 'Adapted campaign visuals into a Facebook promotional experience, delivering interface designs, production assets, and development guidance.',
      thumbnail: '/images/projects/sanpellegrino-thumb.jpg',
      gallery: [
        '/images/projects/sanpellegrino-1.jpg',
      ]
    },
    {
        slug: 'build-a-bear',
        title: 'Build-A-Bear Workshop',
        category: 'Website Design',
        type: 'Landing Page Design',
        description: 'Landing page redesign for Build-A-Bear Workshop, presented through a series of visual design concepts.',
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
      description: 'Website design concepts introducing educators to a classroom tablet program and what to expect when implementing it.',
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
      slug: 'perrier-warhol',
      title: 'Perrier Microsite',
      category: 'Website Design',
      type: 'Brand Microsite',
      description: 'Extended an established campaign design across a promotional microsite, mobile layouts, Facebook assets, and digital advertising.',
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
      slug: 'nywa-logo',
      title: 'NYWA Logo',
      category: 'Logo Design',
      type: 'Logo Design',
      description: 'Adaptation for the Newtown Youth Wrestling Association.',
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
      description: 'Logo design for Really Good Stuff, an educational supplement company.',
      thumbnail: '/images/projects/fortheoutcome-logo-thumb.jpg',
      gallery: [
        '/images/projects/fortheoutcome-logo-1.jpg',
      ]
    },
    {
      slug: 'riverscape-3D',
      title: 'Riverscape 3D',
      category: 'Three.js Environments',
      type: '3D Animation',
      description: 'A personal project exploring Three JS.',
      url: 'https://main.d74vgdg7p1x00.amplifyapp.com/',
      thumbnail: '/images/projects/riverscape-thumb.jpg',
      gallery: [
        '/images/projects/riverscape-1.jpg',
      ]
    },
    {
      slug: 'planetx-3D',
      title: 'Escape from Planet X 3D',
      category: 'Three.js Environments',
      type: '3D Animation',
      description: 'A real-time 3D animation scene.',
      url: 'https://main.d3t7633tqqgda6.amplifyapp.com/',
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
      description: 'Logo design for Inside Out T-Shirts',
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
      description: 'A demo of a breakout video for LinkedIn.',
      thumbnail: '/images/projects/breakout-demo-thumb.jpg',
      gallery: [
        { src: 'https://vimeo.com/1081550423', poster: '/images/projects/breakout-demo-1.jpg' },
      ]
    },
   
    // add the rest...https://main.dhvr9i7niybno.amplifyapp.com/

  ];
