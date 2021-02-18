<script>
	import Map from './components/Map.svelte'
</script>

<style lang="scss"  src="./styles/App.scss" > </style>

<main>
		<div class='top-section'> 
			<h1>IP Address Tracker</h1>
	
				<div class="input-group">
					<input placeholder="Search for any IP address or domain"/>
					<button aria-label="search">
						<img src="/icons/icon-arrow.svg" alt="search" />
					</button>
				</div>
	
				<div class="info">
					<div class="item">
						<span>IP Address</span>
						<p>192.212.174.101</p>
					</div>
					<div class="item">
						<span>Location</span>
						<p>Brooklyn, NY 10001</p>
					</div>
					<div class="item">
						<span>Timezone</span>
						<p>UTC -05:00</p>
					</div>
					<div class="item">
						<span>ISP</span>
						<p>SpaceX Starlink</p>
					</div>
				</div>
		</div>
		<div class="map">
			<Map />
		</div>
</main>
