<script lang="typescript">
  export let searchAgain: () => void
</script>

<button aria-label="search" on:click={searchAgain}>
  <img src="/icons/icon-arrow.svg" alt="search" width={10} height={12} />
</button>
