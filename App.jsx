// import axios from 'axios'
// import { useEffect, useState } from 'react'

// const App = () => {
//   const [storData,setstorData] = useState(null)
//   const [currentIndex,setCurrentindex] = useState(0)
//   useEffect(()=>{
//     axios("https://the-trivia-api.com/v2/questions")
//     .then((res)=>{
//       setstorData(res.data)
//     }).catch((error)=>{
//       console.log(error)
//     })

//   },[])
//   const nextQuestion = ()=>{
//     if(currentIndex < storData.length - 1){
//       setCurrentindex(currentIndex +1)
//       return
//     }
//   }
    

//   return (
//     <>
//       <h1>Quiz App</h1>      
//       {storData ? 
//       <div><h1>Q{currentIndex  + 1}:{storData[currentIndex].question.text}</h1></div>
//       :<h1>loading....</h1>}
//       {storData[currentIndex].incorrectAnswers?.map((item,index)=>{
//         return <div>
//         <input type="radio" name='question' value={item}  id={index}/>
//         <label htmlFor={index}>{item}</label>
//         </div>
//       })}
//       <button onClick={nextQuestion}>Next</button>
//     </>
//   )
// }

// export default App

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const App = () => {
//   const [storData, setstorData] = useState(null);
//   const [currentIndex, setCurrentindex] = useState(0);

//   useEffect(() => {
//     axios("https://the-trivia-api.com/v2/questions")
//       .then((res) => {
//         setstorData(res.data);
//         console.log(res.data)
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const nextQuestion = () => {
//     if (storData && currentIndex < storData.length - 1) {
//       setCurrentindex(currentIndex + 1);
//     }
//   };
//   function shuffleArray(arry){
//     const emtyArray = []
//     // console.log(arry)
//     for(let i = 0; i < arry.length; i++ ){
//       const rendomNumber = Math.ceil(Math.random() * arry.length)
//       if(emtyArray.includes(rendomNumber)){
//         i --
//         // console.log("nubir mojod ha")
//       }else{

//         emtyArray.push(rendomNumber)
//         console.log(rendomNumber)
//         shuffleArray[rendomNumber] = arry[i]
//       }
//     }
//     return shuffleArray
//   }
//   // shuffleArray([1,2,3,4])
  

//   return (
//     <>
//       <h1>Quiz App</h1>
//       {storData ? (
//         <>
//           <div>
//             <h1>Q{currentIndex + 1}: {storData[currentIndex].question.text}</h1>
//           </div>
//           {shuffleArray([...storData[currentIndex].incorrectAnswers,storData[currentIndex].correctAnswer])?.map((item, index) => (
//             <div key={index}>
//               <input type="radio" name='question' value={item} id={index} />
//               <label htmlFor={index}>{item}</label>
//             </div>
//           ))}
//                 <button onClick={nextQuestion}>Next</button>
//         </>
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </>
//   );
// }

// export default App;




import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const App = () => {
  const [storData, setstorData] = useState(null);
  const [currentIndex, setCurrentindex] = useState(0);
const input = useRef([])
  useEffect(() => {
    axios("https://the-trivia-api.com/v2/questions")
      .then((res) => {
        setstorData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const nextQuestion = () => {
    const seletedOption = input.current.find(item => item && item.checked);
    console.log(seletedOption.value) 
    if (storData && currentIndex < storData.length - 1) {
      setCurrentindex(currentIndex + 1);
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      // Swap elements
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  };

  return (
    <>
      <h1>Quiz App</h1>
      {storData ? (
        <>
          <div>
            <h1>Q{currentIndex + 1}: {storData[currentIndex].question.text}</h1>
          </div>
          {shuffleArray([...storData[currentIndex].incorrectAnswers, storData[currentIndex].correctAnswer])?.map((item, index) => (
            <div key={index}>
              <input type="radio" name="question" value={item} id={index} ref={el => input.current[index] =el} />
              <label htmlFor={index}>{item}</label>
            </div>
          ))}
          <button onClick={nextQuestion}>Next</button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default App;
