import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
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
