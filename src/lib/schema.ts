import { z } from 'zod';

// NOTE: this is a truncated list of fields since these are the only ones used.
const characterDataSchema = z.object({
	_id: z.number(),
	name: z.string(),
	sourceUrl: z.string().optional(),
	films: z.array(z.string()).optional(),
	shortFilms: z.array(z.string()).optional(),
	tvShows: z.array(z.string()).optional(),
	imageUrl: z.string()
});

const characterResponseSchema = z.object({
	info: z.object({
		count: z.number()
	}),
	data: characterDataSchema
});

type CharacterResponse = z.infer<typeof characterResponseSchema>;
type CharacterData = z.infer<typeof characterDataSchema>;

export { characterResponseSchema, characterDataSchema };
export type { CharacterResponse, CharacterData };
