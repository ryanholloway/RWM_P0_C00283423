<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let label: string = 'Click me';
	export let disabled: boolean = false;
	export let variant: 'primary' | 'secondary' = 'primary';

	const dispatch = createEventDispatcher<{ pressed: { at: number } }>();

	function handleClick() {
		if (disabled) return;
		dispatch('pressed', { at: Date.now() });
	}
</script>

<button class="btn" data-variant={variant} on:click={handleClick}>
	{label}
</button>

<style>
	.btn {
		padding: 0.5rem 1rem;
		background: #eeeeee;
		color: #222222;
		border-radius: 0.375rem;
		opacity: var(--opacity, 1);
	}
	.btn:disabled {
		--opacity: 0.6;
		cursor: not-allowed;
	}
	.btn[data-variant='primary'] {
		background: #2563eb;
	} /* blue-600 */
	.btn[data-variant='secondary'] {
		background: #6b7280;
	} /* gray-500 */
</style>
