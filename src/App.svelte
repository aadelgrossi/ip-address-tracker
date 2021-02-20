<script lang="typescript">
  import { fetchInfo } from './services/api'
  import type { LatLngExpression } from 'leaflet'
  import Map from './components/Map.svelte'
  import { onMount } from 'svelte'
  import LoadingButton from './components/LoadingButton.svelte'
  import SearchButton from './components/SearchButton.svelte'
  import Footer from './components/Footer.svelte'

  let search = fetchInfo('')
  let query: string = ''
  let loading = false
  let location: LatLngExpression

  onMount(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      location = [coords.latitude, coords.longitude]
    })
  })

  const searchAgain = async () => {
    loading = true
    search = fetchInfo(query)

    const { lat, lng } = (await search).location
    location = [lat, lng]

    loading = false
  }

  const onInput = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return
    searchAgain()
  }
</script>

<header>
  <h1>IP Address Tracker</h1>

  <div class="input-group">
    <input
      bind:value={query}
      on:keydown={onInput}
      placeholder="Search for any IP address or domain"
      title="Search for any IP address or domain"
    />

    {#await search}
      <LoadingButton />
    {:then}
      <SearchButton {searchAgain} />
    {:catch}
      <SearchButton {searchAgain} />
    {/await}
  </div>
</header>

<main>
  <div class="info">
    {#await search then result}
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
        <p>UTC {result.location.timezone}</p>
      </div>
      <div class="item">
        <span>ISP</span>
        <p title={result.as.name}>{result.as.name}</p>
      </div>
    {/await}
  </div>

  <div class="map">
    {#if location}
      <Map position={location} />
    {/if}
  </div>
</main>

<Footer />

<style lang="scss" src="./styles/App.scss"></style>
