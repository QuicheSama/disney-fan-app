import { browser } from '$app/environment';
import { QueryClient } from '@tanstack/svelte-query';

// To support SSR, have the server prefetch the default and featured characters and pass down the query and key so the page can request it from cache.
const defaultCharacterIds = [
    3347,   //Jafar
    3389,   //Jasmine
    156,    //Aladdin
    25,     //Abu
    256,    //Anna
    2099,   //Elsa
    3771,   //Kristoff
    4994    //Olaf
  ];
  
  const featuredCharacterIds = [
    571,    //Belle, 
    544,    //The Beast, 
    4703,   //Mickey Mouse, 
    1947    //Donald Duck, 
  ];

export const load = async ({fetch}) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});

    const createParamsForCreateQuery = (ids: Array<number>) => {
        return ids.map((id) => {
            return {
                queryKey: ['character', id],
                queryFn: async () => ((await fetch(`https://api.disneyapi.dev/character/${id}`)).json())
            }
        });
    }
    
    const defaultCharacters = createParamsForCreateQuery(defaultCharacterIds);
    const featuredCharacters = createParamsForCreateQuery(featuredCharacterIds)
    
    await Promise.all([...defaultCharacters, ...featuredCharacters].map((query) => {
        const { queryKey, queryFn } = query;
        return queryClient.prefetchQuery({ queryKey, queryFn });
    }));
    

	return { queryClient, defaultCharacters, featuredCharacters };
};
