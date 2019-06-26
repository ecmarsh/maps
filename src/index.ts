import Map from './Map'
import User from './User'
import Company from './Company'

const customMap = new Map('#map')

const user = new User()
const company = new Company()

customMap.addMarkers([user, company])
