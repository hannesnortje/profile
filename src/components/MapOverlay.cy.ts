import MapOverlay from './MapOverlay.vue'

describe('<MapOverlay />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(MapOverlay)
  })
})