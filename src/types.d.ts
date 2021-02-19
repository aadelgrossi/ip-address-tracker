interface IpfyResponse {
  ip: string
  location: {
    region: string
    city: string
    country: string
    postalCode: string
    lat: number
    lng: number
    timezone: string
  }
  as: {
    name: string
  }
}
