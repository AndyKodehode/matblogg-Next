import { getSoup } from "@/sanity-utils";


export default async function soup(){
  const supper = await getSoup();
  console.log(supper)
    return(
      <>
       { supper.map((soup)=>(
        <div key={soup.id} className="flex justify-center ml-10">
          <h1 className="ml-10 text-xl">{soup.oppskrift}</h1>
       

        {soup.ingredienser.map((ingrediens) => (
              <li className="text-p" key={ingrediens}>
                {ingrediens}
              </li>
            ))}

      </div>
      
      ))}
      </>
      
      )
}



