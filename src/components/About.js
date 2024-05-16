import React from 'react'

export default function About(props) {
    // const[letstyle,setletstyle]=useState({
    //     color:'black',
    //     backgroundColor:"white",
    //     border:'1px solid black'
    // })
   

    // const[text,setText]=useState('Dark mode')
    // const toggleLight=()=>{
    //     if(letstyle.color==='black'){
    //         setletstyle({
    //             color:'white',
    //             backgroundColor:"black",
    //             border:'1px solid white'
    //         })
    //         setText('Light mode')
    //     }
    //     else{
    //         setletstyle({
    //             color:'black',
    //             backgroundColor:"white",
    //             border:'1px solid black'
    //         })
    //         setText('Dark mode')

    //     }

    // }
    let letstyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
        border: '0.5 px solid',
        borderColor:'white'
    }
  return (
    
    <div className='container'>

      <div className="accordion" id="accordionExample" >
        <h1  style={{ color: props.mode === 'dark'?'white':'#042743'}}> About us</h1>
  <div className="accordion-item" style={letstyle}>
    <h2 className="accordion-header" id="headingOne" style={letstyle}>
      <button className="accordion-button" style={letstyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Text Manipulation Tools:</strong>
      </button>
    </h2>
    <div id="collapseOne" style={letstyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={letstyle}>
      TextUtils offers a range of text manipulation tools, allowing users to transform text in various ways. This includes converting text to uppercase, lowercase, title case, sentence case, and more. These tools help users format text according to their preferences and needs.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={letstyle}>
    <h2 className="accordion-header" id="headingTwo" style={letstyle}>
      <button className="accordion-button collapsed"style={letstyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Preview Feature</strong>
      </button>
    </h2>
    <div id="collapseTwo" style={letstyle} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={letstyle}>
      The preview feature in TextUtils enables users to see a real-time preview of how their text will appear after applying specific transformations. This instant feedback allows users to make quick adjustments and ensure the desired formatting before finalizing the text.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={letstyle}>
    <h2 className="accordion-header" id="headingThree" style={letstyle}>
      <button className="accordion-button collapsed" style={letstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Word Count and Character Count:</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={letstyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={letstyle}>
      TextUtils provides a word count and character count tool, allowing users to analyze the length of their text. This feature is useful for writers, editors, and anyone working with text who needs to track the number of words or characters in a document or piece of content.

      </div>
    </div>
  </div>
</div>

    </div>
  )
}
