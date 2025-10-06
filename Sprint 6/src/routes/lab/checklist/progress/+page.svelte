<script lang='ts'>
    import ChecklistItem from "$lib/components/ChecklistItem.svelte";
    let items = [
    { id: 1, label: "Task 1", done: false },
    { id: 2, label: "Task 2", done: false },
    { id: 3, label: "Task 3", done: false },
    { id: 4, label: "Task 4", done: false },
    { id: 5, label: "Task 5", done: false }
  ];
    let submittedCheckedCount = 0;


    
function onChange(event: CustomEvent) {
    const { id, done } = event.detail;
    const item = items.find((i) => i.id === id);
    if (item) item.done = done;
  }
function onSubmit() {
    submittedCheckedCount = items.filter((item) => item.done).length;
  }

  const totalItems = items.length;

 $: progressPercentage = totalItems === 0 ? 0 : Math.round((submittedCheckedCount / totalItems) * 100);
</script>

<div class="ml-4">
<h1 data-testid="title" class="text-2xl font-bold mb-4">Progress Checklist</h1>

<div class="flex flex-col space-y-2 mb-4 ">
  {#each items as item (item.id)}
    <ChecklistItem {...item} on:change={onChange} />
  {/each}
</div>

<p class="mb-4">Progress: <span class="font-bold">{submittedCheckedCount}</span>/{totalItems} (<span class="font-bold">{progressPercentage}%</span>)</p>

<button 
  on:click={onSubmit} 
  class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400">
  Submit
</button></div>
