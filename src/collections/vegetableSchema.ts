import { reference, z } from "astro:content"
import { MONTHS_EN } from "@levino/shipyard-base"

const months = z.enum(MONTHS_EN)

export const vegetablesSchema = z.object({
  name: z.object({
    latin: z.string(),
    de: z.string(),
  }),
  sowing: z.array(months),
  harvest: z.array(months),
  planting: z.array(months).optional(),
  supplier: reference("suppliers"),
})
