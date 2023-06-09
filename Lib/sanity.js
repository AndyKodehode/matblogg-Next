// import { createClient } from '@sanity/client'


const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const Client = {
	projectId,
	dataset,
	apiVersion, // https://www.sanity.io/docs/api-versioning
	useCdn: false
	
	
	// if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
}