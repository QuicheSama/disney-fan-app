<script lang="ts">
	export let name: string;
	export let imageUrl: string;
	export let updatedAt: string;
	export let films: Array<string>;
	export let shorts: Array<string>;
	export let shows: Array<string>;
	export let infoUrl: string;
</script>

<div class="container">
	<div class="image-container">
		<img src={imageUrl} alt={name} />
	</div>
	<div class="details">
		<h1>{name}</h1>
		<h3>Last updated {new Date(updatedAt).toLocaleString()}</h3>
		<h2>Feature Films</h2>
		<ul>
			{#each films || [] as film (film)}
				<li>{film}</li>
			{/each}
		</ul>
		<h2>Short Films</h2>
		<ul>
			{#each shorts || [] as short (short)}
				<li>{short}</li>
			{/each}
		</ul>
		<h2>TV Shows</h2>
		<ul>
			{#each shows || [] as show (show)}
				<li>{show}</li>
			{/each}
		</ul>

		<ul></ul>
		<button on:click={() => location.assign(infoUrl)}>Explore More Character Details </button>
	</div>
</div>

<style>
	h1 {
		font-size: 2rem;
		padding: 0;
		margin: 0;
		padding-bottom: 2rem;
	}
	h2 {
		font-size: 1rem;
		padding: 0;
		margin: 0;
	}
	h3 {
		font-size: 0.9rem;
		padding: 0;
		padding-bottom: 1rem;
		margin: 0;
	}

	ul {
		font-size: 0.7rem;
		padding-top: 0;
		margin: 0;
		padding-bottom: 1rem;
	}

	button {
		color: #f1f2f3;
		background-color: #054553;
		box-shadow: 0px 4px 4px 0px #0545533d;
		height: 2.5rem;
		border-radius: 0.5rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}

	.container {
		display: flex;
		flex-direction: row;
		background: #f1f2f3;
		padding: 2rem;
	}

	.image-container {
		width: 21rem;
		height: 24rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.5rem;
		box-shadow: 0px 4px 24px 0px #0545531f;
	}

	.details {
		flex-direction: column;
		padding-left: 1rem;
		padding-right: 1rem;
		color: #222222;
	}
</style>
