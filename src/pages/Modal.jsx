import React from 'react'
// import '../styles/Modal.scss'
import '../styles/modal.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import{ toast} from "react-toastify"


const Modal = () => {

  const totalQty = useSelector(state=> state.cartSlice.totalQuantity)
const totalAmount = useSelector(state=> state.cartSlice.totalAmount)
  const [cell , setCell] = useState('')
  const [residentialAddress , setResidentialAddress] = useState('')
  
 const navigate = useNavigate()
const handleSubmit = () =>{
  if(cell && residentialAddress){
  toast.success("Your order has been placed succesfully")
   navigate('/home') 
   localStorage.removeItem("cartSlice")
  }
    
}


  return (
    <div className='shade-area'>
        <div className='modal-container'>
            <form className='form-group' >                   
                <input type="number" className='form-control' placeholder='Cell No'
                    required onChange={(e)=>setCell(e.target.value)} value={cell}                        
                />
                <br></br>
                <input type="text" className='form-control' placeholder='Residential Address'
                    required onChange={(e)=>setResidentialAddress(e.target.value)}
                    value={residentialAddress}
                />
                <br></br>
                <label>Total Quantity</label>
                <input type="text" className='form-control' readOnly 
                    required value={totalQty}
                />
                <br></br>
                <label>Total Price</label>
                <input type="text" className='form-control' readOnly
                    required value={totalAmount}
                />
                <br></br>
                <button type='submit' className='btn btn-success btn-md' onClick={handleSubmit}>Submit</button>
            </form>
            <Link to="/cart">
            <div className='delete-icon' >x</div>
            </Link>
        </div>
    </div>
  )
}

export default Modal