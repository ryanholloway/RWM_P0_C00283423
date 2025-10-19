<script lang="ts">
  import ChecklistItem from "$lib/components/ChecklistItem.svelte";
  import { get } from 'svelte/store';
	import { completedStore, itemsStore, percentStore, type Item } from "../../../../stores/checklist";

  let items: Item[] = [];
  let visibleCompleted = 0;
  let visiblePercent = 0;

  itemsStore.subscribe(value => {
    items = value;
  });

  function onChange(event: CustomEvent) {
    const { id, done } = event.detail;
    const updated = items.map(item => item.id === id ? { ...item, done } : item);
    itemsStore.set(updated);
  }

  function onSubmit() {
    visibleCompleted = get(completedStore);
    visiblePercent = get(percentStore);
  }
</script>

<div class="ml-4">
  <h1 data-testid="title" class="text-2xl font-bold mb-4">Progress Checklist</h1>

  <div class="flex flex-col space-y-2 mb-4">
    {#each items as item (item.id)}
      <ChecklistItem {...item} on:change={onChange} />
    {/each}
  </div>

  <p class="mb-4">
    Progress: <span class="font-bold">{visibleCompleted}</span>/{items.length} (<span class="font-bold">{visiblePercent}%</span>)
  </p>

  <button
    on:click={onSubmit}
    class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    Submit
  </button>
</div>
