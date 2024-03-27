import { Html, Text } from "@react-three/drei";

import '../App.css'


/*
Properties needed
- position
- Title
- Message
- Button message
- Button link


*/


const Card = ({position, title, message, buttonMessage, buttonLink, ...props}) => {


    function sayHello(){
        console.log("Hello World this button is clicked!")
        alert("Hello World this button is clicked!")
    }
    return (
        
        <Html 
        position={position}  
        transform
        
        rotateY={2.0}
        center>
        <div className="card-block">
            <div className="card-block-title">
                <h1>{title}</h1>
            </div>
            
            <p>{message}</p>
            <div>
                <button onClick={() => sayHello()}>Click me</button>
            </div>

        </div>
        </Html>
    )
}
  

export default Card;