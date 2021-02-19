<style lang="scss" src="./styles/App.scss"></style>

<script lang="typescript">
  import { fetchInfo } from './services/api'
  import { onMount } from 'svelte'
  import type { LatLngExpression } from 'leaflet'
  import Map from './components/Map.svelte'

  let result: IpfyResponse
  let position: LatLngExpression

  onMount(async () => {
    result = await fetchInfo('')
    position = [result.location.lat, result.location.lng]
  })
</script>

<main>
  {#if result}
    <div class="top-section">
      <h1>IP Address Tracker</h1>

      <div class="input-group">
        <input placeholder="Search for any IP address or domain" />
        <button aria-label="search">
          <img src="/icons/icon-arrow.svg" alt="search" />
        </button>
      </div>

      <div class="info">
        <div class="item">
          <span>IP Address</span>
          <p>{result.ip}</p>
        </div>
        <div class="item">
          <span>Location</span>
          <p>
            {`${result.location.city}, ${result.location.region} ${result.location.postalCode}`}
          </p>
        </div>
        <div class="item">
          <span>Timezone</span>
          <p>{result.location.timezone} UTC</p>
        </div>
        <div class="item">
          <span>ISP</span>
          <p>{result.as.name}</p>
        </div>
      </div>
    </div>
    <div class="map">
      <Map {position} />
    </div>
  {/if}
</main>
