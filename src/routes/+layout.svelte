<script lang="ts">
	import type { LayoutData } from './$types';
    import { QueryClientProvider } from '@tanstack/svelte-query';	
    import { page } from '$app/stores'; 
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
	import FeaturedCharacters from '$lib/components/FeaturedCharacters.svelte';

    export let data: LayoutData;    
</script>

<QueryClientProvider client={data.queryClient}>
	<div class="page">
        <Header></Header>
        <div class="page-content">
            <slot></slot>
        </div>
        <Footer>
            <!-- TODO: find a way to do this through embedded layouts -->
            {#if $page.url.pathname !== '/profile'}
                <FeaturedCharacters/>
            {/if}
            <div>For educational use only. All characters and content are the property of Disney. This test is for private use and development testing only and should not be distributed for public consumption</div>
        </Footer>
	</div>
</QueryClientProvider>

<style>
	.page {
		display: flex;
		flex-direction: column;
	}

    .page-content {
        flex-grow: 1;
    }
</style>
