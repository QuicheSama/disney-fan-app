<script lang="ts">
	import { createQuery, createQueries } from "@tanstack/svelte-query";
    import { page } from '$app/stores'
	import { derived } from "svelte/store";
	import CharacterCard from "$lib/components/CharacterCard.svelte";
    import { nameToSearch } from "$lib/state";
	import { characterResponseSchema, type CharacterResponse } from "$lib/schema";

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


    const searchQuery = createQuery({
        queryKey: ['character', 'name', $nameToSearch],
        queryFn: async () => (await fetch(`https://api.disneyapi.dev/character?name=${$nameToSearch}`)).json()
    });

    const showSearchResults = derived([nameToSearch, searchQuery], ([$nameToSearch, $searchQuery]) => {
        return $nameToSearch !== "" && !$searchQuery.isLoading && $searchQuery.isSuccess
    });

    $: if ($nameToSearch.length > 0) {
        $searchQuery.refetch();
    }
</script>

<div class='characters'>
    {#if $showSearchResults}
        {#each $searchQuery.data.data || [] as character (character._id)}
            <div class='card-container'>
                <CharacterCard
                    characterId={character._id}
                    name={character.name}
                    films={character.films}
                    imageUrl={character.imageUrl}                
                />
            </div>
        {/each}
    {:else}
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
    {/if}
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