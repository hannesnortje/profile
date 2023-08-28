import MetaInformation from './MetaInformation.vue'

describe('<MetaInformation />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(MetaInformation)
  })
})