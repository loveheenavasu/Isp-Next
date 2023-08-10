import { getApolloClient } from "lib/apollo-client";

import {
  QUERY_ALL_GALLERY_IMAGES,
  QUERY_ALL_BOOOKS_IMAGES,
  QUERY_ALL_WALLART_IMAGES,
  QUERY_ALL_PROJECTS_IMAGES,
} from "data/images";

/**
 * getGalleryImages
 */

export async function getGalleryImages() {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let pageData;

  try {
    pageData = await apolloClient.query({
      query: QUERY_ALL_GALLERY_IMAGES,
    });
  } catch (e) {
    console.log(` Failed to query page data: ${e.message}`);
    throw e;
  }

  return pageData;
}
export async function getProjectImages() {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let pageData;

  try {
    pageData = await apolloClient.query({
      query: QUERY_ALL_PROJECTS_IMAGES,
    });
  } catch (e) {
    console.log(` Failed to query page data: ${e.message}`);
    throw e;
  }

  return pageData;
}

export async function getWallArtImages() {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let pageData;

  try {
    pageData = await apolloClient.query({
      query: QUERY_ALL_WALLART_IMAGES,
    });
  } catch (e) {
    console.log(` Failed to query page data: ${e.message}`);
    throw e;
  }

  return pageData;
}

export async function getBooksImages() {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let pageData;

  try {
    pageData = await apolloClient.query({
      query: QUERY_ALL_BOOOKS_IMAGES,
    });
  } catch (e) {
    console.log(` Failed to query page data: ${e.message}`);
    throw e;
  }

  return pageData;
}
