<h1 data-testid="title">Progress Checklist</h1>
<script lang='ts'>
    import ChecklistItem from "$lib/components/ChecklistItem.svelte";
    let item = {id: 1, label: 'Task 1', done:false};
    let checkedCount = 0;

    
function onChange(event: CustomEvent) {
    const { done } = event.detail;
    if (done) {
        checkedCount++;
    } else if (checkedCount > 0) {
        checkedCount--;
    }
}

</script>

<ChecklistItem {...item} on:change={onChange} />

<p>Checked Items: {checkedCount}</p>