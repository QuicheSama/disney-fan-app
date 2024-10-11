import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, fetch, params }) => {
	const { id } = params;
	const { queryClient } = await parent();

	// To support SSR, have the server prefetch the content and pass down the query and key so the page can request it from cache
	const queryKey = ['character', id];
	const queryFn = async () => (await fetch(`https://api.disneyapi.dev/character/${id}`)).json();

	await queryClient.prefetchQuery({ queryKey, queryFn });

	return { queryKey, queryFn, id };
};
