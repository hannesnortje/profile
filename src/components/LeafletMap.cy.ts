import LeafletMap from './LeafletMap.vue'

describe('<LeafletMap />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(LeafletMap)
  })
})