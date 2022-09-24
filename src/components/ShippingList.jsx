import React from 'react'
import {useState} from "react";
import ShippingForm from './ShippingForm';

function ShippingList() {
    const [items,setItems]=useState([]);
    const addToList = (item)=>{
    console.log(item);
    const itemsCopy = [...items];
    itemsCopy.push(item)
    setItems(itemsCopy);
    };

  return(
    


<div>
        <ShippingForm addToListCallback={(value)=>addToList(value)}/>
        <table>
            <thead>
                <th>Title</th>
                <th>Weight</th>
                <th>Color</th>
                <th>Id</th>
            </thead>
            <tbody>
                {
                items.map((item)=>{
                return(
                    <tr key={item.Title}>
                        <td>{item.Title}</td>
                        <td>{item.Weight}</td>
                        <td>
                            <div style={{
                                backgroundColor:item.Color,
                                width:"40px",
                                height:"20px",
                            
                                }}
                            ></div>
                        </td>
                        
                        <td>{item.Id}</td>
                    </tr>
                );
                })
                }
            </tbody>
        </table>
    </div>
                
        


        
        
    

    
  
)
            }

export default ShippingList