import DefaultLayout from './DefaultLayout.vue'

describe('<DefaultLayout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(DefaultLayout)
  })
})