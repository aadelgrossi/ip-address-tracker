<script lang="typescript">
  export let onSubmit: () => void
</script>

<button aria-label="search" on:click={onSubmit}>
  <img src="/icons/icon-arrow.svg" alt="search" width={10} height={12} />
</button>
