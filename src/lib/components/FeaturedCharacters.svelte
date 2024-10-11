<script lang="ts">
	import { createQueries } from "@tanstack/svelte-query";
	import { derived } from "svelte/store";
    import { page } from '$app/stores';
	import { characterResponseSchema, type CharacterResponse } from "$lib/schema";
	import CharacterCard from "./CharacterCard.svelte";

    const characterQueries = createQueries({ queries: $page.data.featuredCharacters });
    const unwrappedQueries = derived(
        characterQueries, 
        ($characterQueries) => $characterQueries.map(query => query)
    );

    let responses:Array<CharacterResponse> = []
    $: responses = $unwrappedQueries.map((query) => {
        const parsed = characterResponseSchema.safeParse(query.data);
        if(!parsed.success) {
            console.error(parsed.error)
            return null;
        }
        return parsed.data
        
    }).filter(Boolean) as Array<CharacterResponse>;
</script>

<div class='container'>
    <h2>Featured Characters!</h2>
    <div class='characters'>
        {#each responses as response}
            <div class='card-container'>
                <CharacterCard
                    name={response.data.name}
                    characterId={response.data._id}
                    films={response.data.films ?? []}
                    imageUrl={response.data.imageUrl}
                />      
            </div>
        {/each}
    </div>
</div>

<style>
    h2 {
        font-size: 2.25rem;
        color: white;
    }
    .container {
        background-color: #054553;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .characters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .card-container {
        margin: 0.5rem;
    }
</style>