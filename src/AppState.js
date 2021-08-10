import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  projects: [
    {
      name: 'Keeper',
      img: 'https://images-platform.99static.com/IPG0oX6KOQrFeVzKkgcRibkpqF4=/157x157:1417x1417/500x500/top/smart/99designs-contests-attachments/115/115998/attachment_115998183',
      type: 'social networking application',
      description: 'A full stack social networking platform',
      tech: 'HTML5, CSS, Vue3, Bootstrap, JavaScript ES6, C#, MySQL & .NET'
    },
    {
      name: 'The Network',
      img: 'https://e7.pngegg.com/pngimages/524/455/png-clipart-computer-icons-mesh-networking-share-icon-others-miscellaneous-computer-network.png',
      type: 'social networking platform',
      description: 'A full stack social networking platform',
      tech: 'HTML5, JavaScript ES6, Vue3, CSS, Node.js, Bootstrap, MongoDB & .NET'
    },
    {
      name: 'Bug Log',
      img: 'https://www.pinclipart.com/picdir/middle/499-4998717_ants-on-a-log-clipart-png-download.png',
      type: 'tracking application',
      description: 'A full stack forum application to solve and track software bugs.',
      tech: 'HTML5, JavaScript ES6, CSS, Vue3, Node.js, MongoDB, Bootstrap & .NET'
    }],
  collaborations: [
    {
      name: 'Hogout',
      img: 'https://raw.githubusercontent.com/dhildeb/hogout/master/hogout.client/src/assets/img/hogoutTitle.png',
      type: 'social platform',
      description: 'Collaborated with a team of four to develop a full stack social networking platform.',
      tech: 'JavaScript ES6, Vue3, CSS, HTML5, Bootstrap, MongoDB, Node.js & .NET'
    },
    {
      name: 'KanBan',
      img: 'https://github.com/wyattDockstader/kanban/blob/master/kanban%20logo.png?raw=true',
      type: 'project management application',
      description: 'Collaborated with a partner developer to develop a full stack KanBan board application.',
      tech: 'JavaScript ES6, Vue3, CSS, HTML5, Bootstrap, MongoDB, Node.js & .NET'
    }
  ],
  contacts: [
    {
      name: 'github',
      logo: 'mdi mdi-github',
      link: 'https://github.com/hannahhayward'
    },
    {
      name: 'email',
      logo: 'mdi mdi-email',
      link: 'hsquared@gmail.com'
    },
    {
      name: 'linkedin',
      logo: 'mdi mdi-linkedin',
      link: 'www.linkedin.com/in/hannahhayward97'
    }
  ],
  technologies: [{
    name: 'javascript',
    img: 'https://mpng.subpng.com/20180810/biz/kisspng-javascript-scalable-vector-graphics-logo-encapsula-javascript-le-ekran-grnts-almak-alpere-5b6dbeb48e4583.2854840415339189005828.jpg'
  },
  {
    name: 'css',
    img: 'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png'
  },
  {
    name: 'html',
    img: 'https://i.stack.imgur.com/PgcSR.png'
  },
  {
    name: 'vue',
    img: 'http://assets.stickpng.com/thumbs/58482acecef1014c0b5e4a1e.png'
  },
  {
    name: 'node',
    img: 'https://w7.pngwing.com/pngs/611/356/png-transparent-node-js-javascript-express-js-angularjs-random-icons-text-logo-number-thumbnail.png'
  },
  {
    name: 'csharp',
    img: 'https://cis.msjc.edu/Tutorials/Programming/Languages/Csharp/images/Csharp_logo.png'
  },
  {
    name: 'mongo',
    img: 'https://w1.pngwing.com/pngs/104/466/png-transparent-mongodb-logo-database-nosql-postgresql-mysql-green-text-line.png'
  },
  {
    name: 'mysql',
    img: 'https://spng.subpng.com/20181204/trz/kisspng-mysql-database-insert-table-mysql-png-logos-free-download-5c064d0c6fb466.1460181915439168124576.jpg'
  },
  {
    name: 'bootstrap',
    img: 'https://image.emojipng.com/884/12100884.jpg'
  },
  {
    name: 'dotnet',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png'
  },
  {
    name: 'auth0',
    img: 'https://iconape.com/wp-content/files/zi/33774/svg/auth0.svg'
  }]
})
