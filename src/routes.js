import HomeComponent from './components/Home'
import VenuesComponent from './components/Venues'

export const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '/venues',
    component: VenuesComponent
  }
]
