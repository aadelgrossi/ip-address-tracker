<style>
  div {
    height: 100%;
    width: 100%;
    z-index: 0;
  }
</style>

<script lang="typescript">
  import type { Map, LatLngExpression } from 'leaflet'
  import * as L from 'leaflet'

  let map: Map
  export let position: LatLngExpression

  const mapIcon = L.icon({
    iconUrl: '/icons/icon-location.svg',
    iconSize: [46, 56],
  })

  const createMap = (container: HTMLDivElement): Map => {
    let m = L.map(container).setView(position, 16)

    L.marker(m.getCenter(), {
      icon: mapIcon,
    }).addTo(m)

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
          &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
        subdomains: 'abcd',
        maxZoom: 16,
      }
    ).addTo(m)

    return m
  }

  const mapAction = (container: HTMLDivElement) => {
    map = createMap(container)
    return {
      destroy: () => {
        map.remove()
      },
    }
  }
</script>

<div use:mapAction />
