import { reference } from 'astro:content';
import z from 'zod';
import { MONTHS_EN } from '@levino/shipyard-base';
const months = z.enum(MONTHS_EN);
const SOWING_SCHEMAS = ['A', 'B', 'C', 'D'];
export const plantsSchema = ({ image }) => z
    .object({
    name: z.object({ latin: z.string(), german: z.string() }),
    description: z.string().optional(),
    height: z.number(),
    soil: z.array(z.enum(['moist', 'dry', 'normal', 'wet'])),
    sunExposure: z.array(z.enum(['full', 'semi-shade', 'shade'])),
    hardiness: z.enum(['hardy', 'tender']),
    spread: z.number().optional(),
    germination: z
        .object({
        dark: z.boolean().default(false),
        light: z.boolean().default(false),
    })
        .optional()
        .default({ dark: false, light: false }),
    flowerColor: z.array(z.enum([
        'wine-red',
        'red',
        'blue',
        'yellow',
        'white',
        'pink',
        'green',
        'brown',
        'orange',
        'violet',
        'rose',
        'black',
    ])),
    toSow: z.boolean().default(true),
    foliageColor: z.enum(['green', 'red', 'silver']),
    lifecycle: z.enum(['annual', 'perennial', 'biennial', 'shrub', 'tree']),
    sowingTime: z.array(months).optional(),
    sowingScheme: z.enum(SOWING_SCHEMAS).optional(),
    floweringSeason: z.array(months),
    images: z
        .array(z.object({
        src: image(),
        alt: z.string(),
    }))
        .optional(),
    inStock: z.boolean().default(false),
    supplier: reference('suppliers'),
})
    .refine(({ sowingTime, sowingScheme }) => sowingTime || sowingScheme, 'You need to either set a `sowingTime` or a `sowingScheme`.')
    .transform(({ sowingTime, sowingScheme: sowingScheme, ...data }) => ({
    ...data,
    ...(sowingTime
        ? { sowingTime }
        : { sowingTime: sowingSchemeToSowingTime(sowingScheme) }),
}));
const sowingSchemeToSowingTime = (sowingScheme) => {
    switch (sowingScheme) {
        case 'A':
            return ['september', 'october'];
        case 'B':
            return ['february', 'march', 'april', 'may'];
        case 'C':
            return ['march', 'april', 'may', 'june'];
        case 'D':
            return ['april', 'may', 'june'];
    }
};
