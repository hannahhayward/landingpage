import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
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
  ]
})
