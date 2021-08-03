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
      logo: 'mdi-github',
      link: 'https://github.com/hannahhayward'
    },
    {
      name: 'email',
      logo: 'mdi-email',
      link: 'hsquared@gmail.com'
    },
    {
      name: 'linkedin',
      logo: 'mdi-linkedin',
      link: 'www.linkedin.com/in/hannahhayward97'
    }
  ]
})
