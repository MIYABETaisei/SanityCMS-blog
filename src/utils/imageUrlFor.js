import imageUrlBuilder from "@sanity/image-url";
import { config } from "src/libs/sanity";

export const urlFor = (source) => imageUrlBuilder(config).image(source);
