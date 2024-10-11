<script lang="ts">
	import { createQueries } from "@tanstack/svelte-query";
    import { page } from '$app/stores'
	import { derived } from "svelte/store";
	import { characterResponseSchema, type CharacterResponse } from "$lib/schema";
	import CharacterCard from "$lib/components/CharacterCard.svelte";

    const defaultCharacterQueries = createQueries({ queries: $page.data.defaultCharacters });
    const unwrappedDefaultQueries = derived(
        defaultCharacterQueries, 
        ($queries) => $queries.map(query => query)
    );

    $: defaultCharacterResponses = $unwrappedDefaultQueries.map((query) => {
        const parsed = characterResponseSchema.safeParse(query.data);
        if(!parsed.success) {
            console.error(parsed.error)
            return null;
        }
        return parsed.data
        
    }).filter(Boolean) as Array<CharacterResponse>;

</script>
<div class='characters'>
        {#each defaultCharacterResponses as response}
        <div class="card-container">
            <CharacterCard
                name={response.data.name}
                characterId={response.data._id}
                films={response.data.films ?? []}
                imageUrl={response.data.imageUrl}
            />
        </div>      
        {/each}
</div>

<style>
    .characters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .card-container {
        margin: 0.5rem;
    } 

</style>