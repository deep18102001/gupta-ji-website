import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  let fun = props.data
  console.log(fun, "fun");

  return (
    <div >

      <div className='nav'>
        <h1>Gupta Ji...</h1>
        <input className='navinput' type='search' onChange={((e) => { fun(e.target.value) })} placeholder='search your fasion' />

        <div className='navbtn'>
          <button><Link to={'/Cart'}><i class="fa-solid fa-cart-shopping"></i></Link></button>
          <button><Link to={'/SingUp'}><i class="fa-solid fa-user"></i>log in</Link></button>
        </div>

      </div>
      <input className='navinputhide' type='search' onChange={((e) => { fun(e.target.value) })} placeholder='search your fasion' />


    </div>
  )
}

export default Navbar