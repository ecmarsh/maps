import faker from 'faker'
import { Mappable } from './Map'

export default class Company implements Mappable {
  name: string
  slogan: string
  location: {
    lat: number
    lng: number
  }
  color: string

  constructor(color = 'red') {
    this.name = faker.company.companyName()
    this.slogan = faker.company.catchPhrase()
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    }
    this.color = color
  }

  get markerContent() {
    return `
      <div>
        <strong style="color: ${this.color}">Company ${this.name}</strong><br/>
        <em><q>${this.slogan}</q></em>
      </div>
    `
  }
}
