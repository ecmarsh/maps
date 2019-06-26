import faker from 'faker'
import { Mappable } from './Map'

export default class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }
  color: string

  constructor(color = 'blue') {
    this.name = faker.name.firstName()
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    }
    this.color = color
  }

  get markerContent() {
    return `User <span style="color: ${this.color}">${this.name}</span>`
  }
}
