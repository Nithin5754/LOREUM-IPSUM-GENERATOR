import React, { useState } from 'react';
import data from './data';
function App() {
  let [count,setCount]=useState(0)
  let [paragraph,setParagraph]=useState([])


// const handleCountChange=(e)=>{
//   // console.log(e.target.value);
//   setCount(e.target.value)
// }
const handleSubmit=(e)=>{
  
  e.preventDefault()
  // let newArray=[]

// if(count<0){
//   newArray.push(data[0])
//   return setParagraph(newArray)
// }
// if(count>data.length-1){
//   count=data.length-1
// }

//   for(let i=0;i<count;i++){
//     newArray.push(data[i])


//   }

let amount=parseInt(count)


if(amount<0){
  return setParagraph(data.slice(0,1))
}

  
// setParagraph(newArray)
return setParagraph(data.slice(0,amount))

}

 
  return (
  <main>
     <section>
   <form action="" onSubmit={handleSubmit}>
   <input type="number" name='paragraph' value={count}  onChange={(e)=>setCount(e.target.value)}/>
    <button className='btn'>submit</button>
  {paragraph.length>0&&<button className='btn ' onClick={()=>setParagraph([])}>clear</button>}
   </form>
     </section>
     <article>
         {
          paragraph.map((para,index)=>{
            return(
              <p key={index}>{para}</p>
            )
          })
         }
     </article>
  </main>
    )
}

export default App;
