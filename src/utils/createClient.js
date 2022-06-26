import { config } from "src/libs/sanity";
import { createClient } from "next-sanity";
export const sanityClient = createClient(config);
