<script lang="typescript">
  import { fetchInfo } from './services/api'
  import { onMount } from 'svelte'
  import type { LatLngExpression } from 'leaflet'
  import Map from './components/Map.svelte'

  let result: IpfyResponse
  let position: LatLngExpression
  let query: string
  let loading = false

  onMount(async () => {
    result = await fetchInfo('')
    position = [result.location.lat, result.location.lng]
  })

  const onSubmit = async () => {
    loading = true

    fetchInfo(query)
      .then((response) => {
        result = response
        position = [response.location.lat, response.location.lng]
        loading = false
      })
      .catch((err) => {
        console.error(err)
        query = ''
        loading = false
      })
  }

  const onInput = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return
    onSubmit()
  }
</script>

<main>
  {#if result}
    <div class="top-section">
      <h1>IP Address Tracker</h1>

      <div class="input-group">
        <input
          bind:value={query}
          on:keydown={onInput}
          placeholder="Search for any IP address or domain"
        />
        <button aria-label="search" on:click={onSubmit} disabled={loading}>
          {#if loading}
            <img
              src="/icons/loading.svg"
              alt="loading"
              width={24}
              height={24}
            />
          {:else}
            <img
              src="/icons/icon-arrow.svg"
              alt="search"
              width={10}
              height={12}
            />
          {/if}
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
          <p>UTC {result.location.timezone}</p>
        </div>
        <div class="item">
          <span>ISP</span>
          <p>{result.as.name}</p>
        </div>
      </div>
    </div>
    <div class="map">
      <Map bind:position />
    </div>
  {/if}
</main>

<style lang="scss" src="./styles/App.scss"></style>
