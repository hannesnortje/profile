import CV from './CV.vue'

describe('<CV />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(CV)
  })
})