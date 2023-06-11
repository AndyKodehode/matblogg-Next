import { createClient, groq } from "next-sanity";
// import clientConfig from "./config/client.config";
import { Client } from "./Lib/sanity";

export default async function getFrontPage() {
  return createClient(Client).fetch(
    groq`*[_type == "fremside"] {
    _id,
    _createdAt,
    overskrift,
    matInfo
  
  }`
  );
}

export async function getServerSideProps() {
  const front = await getFrontPage();
  return {
    props: {
      front,
    },
  };
}

export async function getFront(slug) {
  return createClient(Client).fetch(
    groq`*[_type == "fremside" && slug.current == $slug][0] {
    _id,
    _createdAt,
    overskrift,
    matInfo,
    bilder
  }`,
    { slug }
  );
}

export async function getLinks() {
  return createClient(Client).fetch(
    groq`*[_type == "fremside"] {
    _id,
    title,
    "slug": slug.current,
    
  }`
  );
}



// "image": image.asset->url,
// "slug": slug.current,
// content,

// ,
//     "slug": slug.current,
//     "image": image.asset->url,
//     alt,
//     content,