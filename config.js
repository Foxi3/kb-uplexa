const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://uplexa.com',
    gaTrackingId: null,
    trailingSlash: true,
  },
  header: {
    logo: '',
    logoLink: 'https://uplexa.com',
    title: "<p style='font-size: 25px; line-height:0.9'><a href='https://kb.uplexa.com'> <strong>K</strong>nowledge<br> <strong>B</strong>ase</a></p>",
    githubUrl: 'https://github.com/Foxi3/kb-uplexa',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/uPlexacoin" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.com/invite/a7mAQwJ" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction/', // add trailing slash if enabled above
      '/get_started/',
      '/uplexa_wallet/',
      '/uplexa_ecosystem/',
      '/technical_data/',
    ],
//    collapsedNav: [
//     '/uplexa_wallet/', // add trailing slash if enabled above
//    ],
    links: [{ text: 'uPlexa', link: 'https://uplexa.com' }],
    frontline: true,
    ignoreIndex: true,
    title:
      "<a href='https://uplexa.com'>uPlexa </a><div class='greenCircle'></div><a href='https://kb.uplexa.com'>docs</a>",
  },
  siteMetadata: {
    title: 'uPlexa Knowledge Base | uPlexa',
    description: 'Knowledge Base for uPlexa & Its Ecosystem',
    ogImage: null,
    docsLocation: 'https://github.com/Foxi3/kb-uplexa/tree/master/content',
    favicon: 'https://raw.githubusercontent.com/Foxi3/uplexa-assets/main/logo_U-bw.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'uPlexa Knowledge Base',
      short_name: 'uplexa-kb',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;