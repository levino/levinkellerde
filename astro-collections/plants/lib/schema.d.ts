import { type SchemaContext } from 'astro:content';
import z from 'zod';
export declare const plantsSchema: ({ image }: SchemaContext) => z.ZodEffects<z.ZodEffects<z.ZodObject<{
    name: z.ZodObject<{
        latin: z.ZodString;
        german: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        latin: string;
        german: string;
    }, {
        latin: string;
        german: string;
    }>;
    description: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    soil: z.ZodArray<z.ZodEnum<["moist", "dry", "normal", "wet"]>, "many">;
    sunExposure: z.ZodArray<z.ZodEnum<["full", "semi-shade", "shade"]>, "many">;
    hardiness: z.ZodEnum<["hardy", "tender"]>;
    spread: z.ZodOptional<z.ZodNumber>;
    germination: z.ZodDefault<z.ZodOptional<z.ZodObject<{
        dark: z.ZodDefault<z.ZodBoolean>;
        light: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        dark: boolean;
        light: boolean;
    }, {
        dark?: boolean | undefined;
        light?: boolean | undefined;
    }>>>;
    flowerColor: z.ZodArray<z.ZodEnum<["wine-red", "red", "blue", "yellow", "white", "pink", "green", "brown", "orange", "violet", "rose", "black"]>, "many">;
    toSow: z.ZodDefault<z.ZodBoolean>;
    foliageColor: z.ZodEnum<["green", "red", "silver"]>;
    lifecycle: z.ZodEnum<["annual", "perennial", "biennial", "shrub", "tree"]>;
    sowingTime: z.ZodOptional<z.ZodArray<z.ZodEnum<any>, "many">>;
    sowingScheme: z.ZodOptional<z.ZodEnum<["A", "B", "C", "D"]>>;
    floweringSeason: z.ZodArray<z.ZodEnum<any>, "many">;
    images: z.ZodOptional<z.ZodArray<z.ZodObject<{
        src: any;
        alt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        [x: string]: any;
        src?: unknown;
        alt?: unknown;
    }, {
        [x: string]: any;
        src?: unknown;
        alt?: unknown;
    }>, "many">>;
    inStock: z.ZodDefault<z.ZodBoolean>;
    supplier: any;
}, "strip", z.ZodTypeAny, {
    [x: string]: any;
    name?: unknown;
    description?: unknown;
    height?: unknown;
    soil?: unknown;
    sunExposure?: unknown;
    hardiness?: unknown;
    spread?: unknown;
    germination?: unknown;
    flowerColor?: unknown;
    toSow?: unknown;
    foliageColor?: unknown;
    lifecycle?: unknown;
    sowingTime?: unknown;
    sowingScheme?: unknown;
    floweringSeason?: unknown;
    images?: unknown;
    inStock?: unknown;
    supplier?: unknown;
}, {
    [x: string]: any;
    name?: unknown;
    description?: unknown;
    height?: unknown;
    soil?: unknown;
    sunExposure?: unknown;
    hardiness?: unknown;
    spread?: unknown;
    germination?: unknown;
    flowerColor?: unknown;
    toSow?: unknown;
    foliageColor?: unknown;
    lifecycle?: unknown;
    sowingTime?: unknown;
    sowingScheme?: unknown;
    floweringSeason?: unknown;
    images?: unknown;
    inStock?: unknown;
    supplier?: unknown;
}>, {
    [x: string]: any;
    name?: unknown;
    description?: unknown;
    height?: unknown;
    soil?: unknown;
    sunExposure?: unknown;
    hardiness?: unknown;
    spread?: unknown;
    germination?: unknown;
    flowerColor?: unknown;
    toSow?: unknown;
    foliageColor?: unknown;
    lifecycle?: unknown;
    sowingTime?: unknown;
    sowingScheme?: unknown;
    floweringSeason?: unknown;
    images?: unknown;
    inStock?: unknown;
    supplier?: unknown;
}, {
    [x: string]: any;
    name?: unknown;
    description?: unknown;
    height?: unknown;
    soil?: unknown;
    sunExposure?: unknown;
    hardiness?: unknown;
    spread?: unknown;
    germination?: unknown;
    flowerColor?: unknown;
    toSow?: unknown;
    foliageColor?: unknown;
    lifecycle?: unknown;
    sowingTime?: unknown;
    sowingScheme?: unknown;
    floweringSeason?: unknown;
    images?: unknown;
    inStock?: unknown;
    supplier?: unknown;
}>, {
    sowingTime: {};
    name?: unknown;
    description?: unknown;
    height?: unknown;
    soil?: unknown;
    sunExposure?: unknown;
    hardiness?: unknown;
    spread?: unknown;
    germination?: unknown;
    flowerColor?: unknown;
    toSow?: unknown;
    foliageColor?: unknown;
    lifecycle?: unknown;
    floweringSeason?: unknown;
    images?: unknown;
    inStock?: unknown;
    supplier?: unknown;
}, {
    [x: string]: any;
    name?: unknown;
    description?: unknown;
    height?: unknown;
    soil?: unknown;
    sunExposure?: unknown;
    hardiness?: unknown;
    spread?: unknown;
    germination?: unknown;
    flowerColor?: unknown;
    toSow?: unknown;
    foliageColor?: unknown;
    lifecycle?: unknown;
    sowingTime?: unknown;
    sowingScheme?: unknown;
    floweringSeason?: unknown;
    images?: unknown;
    inStock?: unknown;
    supplier?: unknown;
}>;
