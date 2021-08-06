import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  projects: [
    {
      name: 'Keeper',
      img: 'https://images-platform.99static.com/IPG0oX6KOQrFeVzKkgcRibkpqF4=/157x157:1417x1417/500x500/top/smart/99designs-contests-attachments/115/115998/attachment_115998183',
      type: 'social networking application'
    },
    {
      name: 'The Network',
      img: 'https://e7.pngegg.com/pngimages/524/455/png-clipart-computer-icons-mesh-networking-share-icon-others-miscellaneous-computer-network.png',
      type: 'social networking application'
    },
    {
      name: 'Bug Log',
      img: 'https://www.pinclipart.com/picdir/middle/499-4998717_ants-on-a-log-clipart-png-download.png',
      type: 'tracking application'
    }],
  collaborations: [
    {
      name: 'Hogout',
      img: 'https://github.com/EricWakeman/hogout/blob/master/hogout.client/src/assets/img/hogoutTitle.png',
      type: 'social platform'
    },
    {
      name: 'KanBan',
      img: 'https://github.com/wyattDockstader/kanban/blob/master/kanban%20logo.png?raw=true',
      type: 'project management application'
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
    img: 'https://e7.pngegg.com/pngimages/757/795/png-clipart-cascading-style-sheets-html-website-development-web-design-web-design-blue-angle.png'
  },
  {
    name: 'html',
    img: 'https://i.stack.imgur.com/PgcSR.png'
  },
  {
    name: 'vue',
    img: 'https://spng.subpng.com/20180718/zqt/kisspng-vue-js-javascript-library-angularjs-react-vue-js-5b4ebe1b93c716.7614705815318871316053.jpg'
  },
  {
    name: 'node',
    img: 'https://w7.pngwing.com/pngs/322/725/png-transparent-node-js-javascript-npm-express-js-sharp-miscellaneous-angle-text.png'
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
    img: 'https://toppng.com/uploads/preview/bootstrap-featured-image-bootstrap-3-logo-11563293130teouf93qpu.png'
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
