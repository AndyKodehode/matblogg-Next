import { getSoup } from "@/sanity-utils";


export default async function soup(){
  const supper = await getSoup();
  console.log(supper)
    // return(
    //     supper.map((soup)=>{
    //     <div>
    //       <h1>{soup.oppskrift}</h1>
    //     </div>}))
}
