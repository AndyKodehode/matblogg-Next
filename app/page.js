import Link from 'next/link';
import Nav from './nav';
import Footer from './footer';
// import{groq} from 'groq'
// import { Client } from '@/Lib/sanity';
import getFrontPage from '@/sanity-utils';

// const query = groq`*[ _type == "fremside"] `


export default async function Home() {
  const frontpage = await getFrontPage();

  console.log(frontpage)
  return (
    
    <div className='flex flex-col items-center w-2/5'>

      
   
       <header className='mt-10'> 
          <h1 key={frontpage._id}>{frontpage.title}</h1>
       </header>

     
      <div className='flex items-center justify-center h-20 mt-5'> 
          <text className='w-3/5 'key={frontpage._id}>{frontpage.matInfo}</text>
       </div>


       
       
       { /*<div className='flex flex-col items-center w-3/5 mt-10' > 

          <h2> Supper </h2>
          <div className='flex items-center justify-center w-3/5 h-32 mt-5 bg-orange-300'> 
            <p> her skal bilde </p>
          </div>
       </div>
       
       <div className='flex flex-col items-center w-3/5 mt-10' > 

          <h2> Pizza </h2>
          <div className='flex items-center justify-center w-3/5 h-32 mt-5 bg-orange-300'> 
            <p> her skal bilde </p>
          </div>
        </div>
        
        <div className='flex flex-col items-center w-3/5 mt-10' > 

          <h2> Restemiddag </h2>
          <div className='flex items-center justify-center w-3/5 h-32 mt-5 bg-orange-300'> 
            <p> her skal bilde </p>
          </div>
        </div> */}
      
      
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



