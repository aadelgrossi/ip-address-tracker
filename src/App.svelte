<script lang="typescript">
  import { fetchInfo } from './services/api'
  import type { LatLngExpression } from 'leaflet'
  import Map from './components/Map.svelte'
  import LoadingButton from './components/LoadingButton.svelte'
  import SearchButton from './components/SearchButton.svelte'
  import Footer from './components/Footer.svelte'
  import { onMount } from 'svelte'

  let result: IpfyResponse
  let query: string = ''
  let loading = false
  let location: LatLngExpression

  const setLocation = (item: IpfyResponse) => {
    const { lat, lng } = item.location
    location = [lat, lng]
  }

  const onSubmit = async () => {
    loading = true

    fetchInfo(query)
      .then((response) => {
        result = response
        setLocation(response)
        loading = false
      })
      .catch((err) => {
        loading = false
      })
  }

  onMount(() => {
    onSubmit()
  })

  const onInput = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return
    onSubmit()
  }
</script>

<header>
  <h1>IP Address Tracker</h1>

  <form class="input-group">
    <input
      bind:value={query}
      on:keydown={onInput}
      type="text"
      placeholder="Search for any IP address or domain"
      title="Search for any IP address or domain"
      aria-label="search-input"
    />

    {#if loading}
      <LoadingButton />
    {:else}
      <SearchButton {onSubmit} />
    {/if}
  </form>
</header>

<main>
  <div class="info">
    {#if result}
      <div class="item">
        <span>IP Address</span>
        <p>{result.ip}</p>
      </div>
      <div class="item">
        <span>Location</span>
        <p
          title={`${result.location.city}, ${result.location.region} ${result.location.postalCode}`}
        >
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
    {/if}
  </div>

  <div class="map">
    {#if location}
      <Map position={location} />
    {/if}
  </div>
</main>

<Footer />

<style lang="scss" src="./styles/App.scss"></style>
