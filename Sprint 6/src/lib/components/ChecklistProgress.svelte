<script lang="ts">
  import ChecklistItem from "$lib/components/ChecklistItem.svelte";

    interface Item {
    id: number | string;
    label: string;
    done: boolean;
  }

  export let items: Item[] = [];

  let localItems = items.map(item => ({ ...item }));

  $: if (items !== undefined) {
    localItems = items.map(item => ({ ...item }));
  }

  let submittedCheckedCount = 0;
  let submittedPercent = 0;

  function onChange(event: CustomEvent) {
    const { id, done } = event.detail;
    localItems = localItems.map(item => item.id === id ? { ...item, done } : item);
  }

  function onSubmit() {
    submittedCheckedCount = localItems.filter(item => item.done).length;
    submittedPercent = localItems.length === 0 
      ? 0 
      : Math.round((submittedCheckedCount / localItems.length) * 100);
  }
</script>

<div class="ml-4">
  <h1 data-testid="title" class="text-2xl font-bold mb-4">Progress Checklist</h1>

  <div class="flex flex-col space-y-2 mb-4">
    {#each localItems as item (item.id)}
      <ChecklistItem {...item} on:change={onChange} />
    {/each}
  </div>

  <p class="mb-4">
    Progress: <span class="font-bold">{submittedCheckedCount}</span>/{localItems.length} (<span class="font-bold">{submittedPercent}%</span>)
  </p>

  <button
    on:click={onSubmit}
    class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    Submit
  </button>
</div>
