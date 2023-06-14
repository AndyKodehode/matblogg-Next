import Link from 'next/link';
import Nav from './nav';
import Footer from './footer';
// import{groq} from 'groq'
// import { Client } from '@/Lib/sanity';
import suppe1 from '../public/bilder/suppe1.jpg'
import pizza1 from '../public/bilder/pizza1.jpg'
import rester1 from '../public/bilder/rester1.jpg'
import Image from 'next/image';
import { getFrontPage } from '@/sanity-utils';


// const query = groq`*[ _type == "fremside"] `


export default async function Home() {
  const frontpage = await getFrontPage();
  
  return (
    
    <div className='flex flex-col items-center w-2/5'>

      
   
       <header className='mt-10'> 
          <h1 key={frontpage._id} className="text-xl">{frontpage.overskrift}</h1>
       </header>

     
      <div className='flex items-center justify-center h-20 mt-5'> 
          <h2 className='w-2/5' key={frontpage._id}>{frontpage.matInfo}</h2>
       </div>


       
       <Link href="/Supper">
       <div className='flex flex-col items-center w-3/5 mt-10' > 

          <h2> Supper </h2>
          <div className='flex items-center justify-center w-3/5 h-32 mt-5 '> 
            <Image src={suppe1} className='w-2/5' width={300} height={300} ></Image>
          </div>
       </div>
       </Link>
       
        <div className='flex flex-col items-center w-3/5 mt-10' > 

          <h2> Pizza </h2>
          <div className='flex items-center justify-center w-3/5 h-32 mt-5 '> 
            <Image src={pizza1} className='w-3/5' width={300} height={300} ></Image>
          </div>
        </div>
        
        <div className='flex flex-col items-center w-3/5 mt-10' > 

          <h2> Restemiddag </h2>
          <div className='flex items-center justify-center w-3/5 h-32 mt-5 '> 
             <Image src={rester1} className='w-2/5' width={300} height={300} ></Image>
          </div>
        </div> 
      
      
    </div>
  )
}


// export const getServerSideProps = async () => {
// const front = await getFrontPage()




//   return {
//     props: {
//             front,
//           },
         
//   };
 
// };



