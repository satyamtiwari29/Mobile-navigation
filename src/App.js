import "./styles.css";
import  {useState} from "react";




export default function App() {


const [count, setCount]= useState(null);


  let imgdata=[`https://www.w3schools.com/w3images/fjords.jpg`,
     `https://www.w3schools.com/w3css/img_lights.jpg`,
     `https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg`,
     `https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=`]
  
  function update(data)
  {
    setCount(data); 
  }
 
  return (

    <div className="phone">
     <div className="imgdiv">
     {
       imgdata.map((url,index)=>
       (
         <img src={index===count?url:0} alt="blog" className="content" key={index} />
       ))
    
     }
    </div> 
     
     <nav className="nav">
         <ul>
             <li className="active" onClick={()=>update(0) }>
                 <i className="fas fa-home"></i>
                 <p>Home</p>
             </li>
             <li onClick={()=>update(1)}>
                <i className="fas fa-box"></i>
                <p>Work</p>
            </li>
            <li onClick={()=>update(2)}>
                <i className="fas fa-book-open"></i>
                <p>Blog</p>
            </li>
            <li onClick={()=>update(3)}>
                <i className="fas fa-users"></i>
                <p>About Us</p>
            </li>
         </ul>
     </nav>
    </div>
  );
}
