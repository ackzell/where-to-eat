import HomeComponent from './routes/home/Home'
import VenuesComponent from './routes/venues/Venues'

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
