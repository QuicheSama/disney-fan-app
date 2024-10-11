<script lang="ts">
	import { createQueries } from "@tanstack/svelte-query";
	import { derived } from "svelte/store";
    import { page } from '$app/stores';
	import { characterResponseSchema, type CharacterResponse } from "$lib/schema";
	import type { SafeParseReturnType } from "zod";

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

<div>
    {#each responses as response}
    <div>
        { JSON.stringify(response)}      
    </div>
      
    {/each}
</div>