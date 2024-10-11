import { z } from "zod";

const characterDataSchema = z.object({
    _id: z.number(),
    url: z.string().optional(),
    name: z.string(),
    sourceUrl: z.string().optional(),
    films: z.array(z.string()).optional(),
    shortFilms: z.array(z.string()).optional(),
    tvShows:z.array(z.string()).optional(),
    videoGames: z.array(z.string()).optional(),
    alignment: z.string().optional(),
    parkAttractions: z.array(z.string()).optional(),
    allies: z.array(z.string()),
    enemies: z.array(z.string()).optional()
});

const characterResponseSchema = z.object({
    info: z.object({
        count: z.number()
    }),
    data: characterDataSchema
})

type CharacterResponse = z.infer<typeof characterResponseSchema>;
type CharacterData = z.infer<typeof characterDataSchema>;

export { characterResponseSchema, characterDataSchema };
export type { CharacterResponse, CharacterData };
