import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Description() {
  const location = useLocation()
  const [quantit, setquantit] = useState(1);
  const [data, setData] = useState([location.state]);
  const [image, setimage] = useState(data[0].image)
  console.log(image, "image")




  function addtocart(val) {
    let itemadd = { ...val, cart: "true", quantity: quantit }
    updatedated(val.id, itemadd)

  }
  function add() {
    setquantit(quantit + 1)
  }

  function less() {
    if (quantit > 1) {
      setquantit(quantit - 1)
    }
  }

  function updatedated(id, itemAdded) {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(itemAdded)
    }).then((response) => {
      response.json().then((resp) => {
      })
    })

  }



  return (
    <div>
      {
        data.map((Description) => {
          return (
            <div className='descripition'>
             
               


              <div className="img">
                <img src={Description.image1} onMouseOver={() => { setimage(Description.image2) }} />
                <img src={Description.image2} onMouseOver={() => { setimage(Description.image3) }} />
                <img src={Description.image3} onMouseOver={() => { setimage(Description.image1) }} />
              </div>



              <img src={Description.image} />
             

              <div className='descripition-font'>
              <h2>Product Details</h2>
                <p>type :{Description.type}</p>
                <p>category :{Description.category}</p>
                <p> description : {Description.description}</p>
                <p>price :{Description.price}</p>

                <button onClick={() => { addtocart(Description) }}>add to cart</button>
                <div>
                <button onClick={less}>-</button>
                <span>{quantit}</span>
                <button onClick={add}>+</button>
                </div>

                
                <select className='descripition-select'>
                  <option value="">--Please choose size--</option>
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="l">l</option>
                  <option value="xl">xl</option>
                  <option value="xx">xx</option>
                </select>
              </div>


             



            </div>
          )
        })
      }
    </div>
  )
}

export default Description