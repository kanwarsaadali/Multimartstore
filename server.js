const express   = require('express')
const cors = require('cors')
const {v4 : uuidv4} = require('uuid')
const stripe = require('stripe')('sk_test_51MKV52SJGXa2liWvu2YyQWlK9z5QshZmjUTE1K0w0zMAZ4aM9vWDBSj4LdAT7rjgPPND1c25V3Lr4qJ9JFVvNn2W00vbGb5aSB')

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Welcome to our Multimart')
})

app.post('/check' , async  (req,res)=>{
    let error;
    let status;
    try{
        const {cart , token} = req.body
        const customer = await stripe.customer.create({
         email : token.email,
         source : token.id
        }) 
        const key = uuidv4()
        const charge = await  stripe.charges.create({
            amount : cart.totalAmount*100,
            currency:  "usd",
            customer: customer.id,
           recipt_email: token.email,
           description:"product descriptions here",
           shipping:{
            name:token.card.name,
            address:{
                line1: token.card.address_line1,
                line2:token.card.address_line2,
                city: token.card.address_city,
                country: token.card.address_country,
                postal_code: token.card.address_zip
            }
           }
        },{idempotencyKey : key})
        status="success"
    }
catch(error){
     console.log(error)
      status="error"
    }
    res.json({status})
})

app.listen(8080,()=>{
    console.log("your app is running on port no 8080")
})