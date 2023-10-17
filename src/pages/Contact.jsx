import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const navigate = useNavigate()
  return (
    <div>
          <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptatem placeat! Id magni eius rerum aperiam delectus, fugit libero porro nostrum odit nam consequuntur corrupti pariatur totam debitis reprehenderit harum reiciendis mollitia. Doloremque accusantium, libero unde nisi atque mollitia dolore perferendis nobis at, enim, asperiores omnis sit facere neque. Modi.
      </p>
      <button onClick={()=>{
        navigate('/')
      }}>Go to Home</button>
    </div>
  )
}

export default Contact



