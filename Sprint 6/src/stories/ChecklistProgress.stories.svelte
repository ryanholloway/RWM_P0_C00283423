<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  export const { Story } = defineMeta({});
</script>

<script lang="ts">
  import ChecklistProgress from '$lib/components/ChecklistProgress.svelte';

  const defaultItems = [
    { id: 1, label: 'Task 1', done: true },
    { id: 2, label: 'Task 2', done: false },
    { id: 3, label: 'Task 3', done: true },
    { id: 4, label: 'Task 4', done: false },
    { id: 5, label: 'Task 5', done: false }
  ];

  const noneCheckedItems = defaultItems.map(i => ({ ...i, done: false }));
  const allCheckedItems = defaultItems.map(i => ({ ...i, done: true }));
  const longLabelItems = [
    { id: 1, label: 'This is a very long task label for UI testing purposes', done: true },
    { id: 2, label: 'Another extremely long label to test wrapping or overflow', done: false },
    { id: 3, label: 'Short label', done: true }
  ];
</script>

<Story name="Default (Mixed)">
  <ChecklistProgress items={defaultItems} />
</Story>

<Story name="None Checked">
  <ChecklistProgress items={noneCheckedItems} />
</Story>

<Story name="All Checked">
  <ChecklistProgress items={allCheckedItems} />
</Story>

<Story name="Long Labels">
  <ChecklistProgress items={longLabelItems} />
</Story>
