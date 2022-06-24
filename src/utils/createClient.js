import { config } from "src/libs/sanity";
import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";
export const sanityClient = createClient(config);
