<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let id: number | string;
  export let label: string;
  export let done = false;

  const dispatch = createEventDispatcher();

  function handleChange(){
    dispatch('change', { id, done });
  } 
</script>

<label>
  <input type="checkbox" bind:checked={done} on:change={handleChange}>
  {label}
</label>