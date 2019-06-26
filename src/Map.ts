export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent: string
  color: string
}

export default class Map {
  private googleMap: google.maps.Map

  constructor(elId: string) {
    this.googleMap = new google.maps.Map(getNode(elId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }

  addMarkers(mappables: Mappable[]): void {
    for (const mappable of mappables) {
      this.addMarker(mappable, mappable.markerContent)
    }
  }

  protected addMarker(mappable: Mappable, content?: string): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })

    if (content) {
      this.addInfoWindow(marker, content)
    }
  }

  protected addInfoWindow(marker: google.maps.Marker, content: string) {
    const infoWindow = new google.maps.InfoWindow({ content })
    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker)
    })
  }
}

const getNode = (selector: string) => document.querySelector(selector)
