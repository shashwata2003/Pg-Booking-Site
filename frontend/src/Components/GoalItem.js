import React from 'react'
import './cardFetch.css'
function GoalItem({key,goal}) {
  return (
    <>
   
        
    
       
          
                
                <div className="card">
                 <img className="card-img-top" src={goal.imgUrl} alt="Card image cap"/> 
                <div className="card-body">
                  <h5 className="card-title">Address: {goal.address}</h5>
                  <h5 className="card-title">Apartment Type:{goal.type}</h5>
                  <h5 className="card-title">Owner Email : {goal.email}</h5>
                  <h5 className="card-title">Rent: {goal.rent}</h5>
                  <button className="btn block"><a href="/dashboard/submit">Interested</a></button>
                </div>
              </div>
              
            

        
    
</>

 
        
  )
}

export default GoalItem