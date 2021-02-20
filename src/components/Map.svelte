<script lang="typescript">
  import type { Map, LatLngExpression, Marker } from 'leaflet'
  import * as L from 'leaflet'
  import { afterUpdate } from 'svelte'

  let map: Map
  let marker: Marker
  export let position: LatLngExpression

  const mapIcon = L.icon({
    iconUrl: '/icons/icon-location.svg',
    iconSize: [46, 56],
  })

  const createMap = (container: HTMLDivElement): Map => {
    let m = L.map(container).setView(position, 16)

    marker = L.marker(position, {
      icon: mapIcon,
    }).addTo(m)

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
          &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
        subdomains: 'abcd',
        maxZoom: 25,
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

  afterUpdate(() => {
    map.flyTo(position, 16, { duration: 2 })

    marker.setLatLng(position)
  })
</script>

<div use:mapAction />

<style>
  div {
    height: 100%;
    width: 100%;
    z-index: 0;
  }
</style>
