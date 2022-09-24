import React,{useState} from 'react'

   

function ShippingForm(props) {
    const[Title,setTitle] = useState("");
    const[Weight,setWeigth] = useState("");
    const[Color,setColor] = useState("");
    const[Id,setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const data={
            Title:Title,
            Weight:Weight,
            Color:Color,
            Id:Id
            
        }
        // console.log(data);
        props.addToListCallback(data)
    };
  return (
   
    <div><br/>
        <h3>Shipping Form</h3>
         
         <form onSubmit={handleSubmit}>
            <input type="text" value={Title} placeholder="Title"
            onChange={(e)=>setTitle(e.target.value)}/><br/> 
            
            <input type="number" placeholder="Weight"
             onChange={(e)=>setWeigth(e.target.value)}/><br/> 
            
            
            <label>Color</label><br/>
            <input type="color" placeholder="Color"
            onChange={(e)=>setColor(e.target.value)}/><br/> 
            
           
            <input type="text"placeholder="Id"
            onChange={(e)=>setId(e.target.value)}/><br/>  
           
            <button type="submit"> Submit </button>
              </form>
 </div>
    
        
           
       
   
  )
}

export default ShippingForm