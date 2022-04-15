const express=require('express')
const dotenv= require('dotenv').config()
const port=process.env.PORT || 5000
const {errorHandler}=require('../backend/middleware/errorMiddleware')
const connectDB=require('../backend/config/db')
connectDB();
const app=express();
var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const stripe = require('stripe')(process.env.STRIPE_API_KEY);


app.use('/api/goals' , require('./routes/goalRoutes') )
app.use('/api/docs' , require('./routes/docRoutes') )

app.use('/api/users' , require('./routes/userRoutes') )
app.use(errorHandler)


app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1KoYqFSDZBjXIg747oL4OCn9',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:3000/dashboard`,
      cancel_url: `http://localhost:3000/dashboard/submit`,
    });
  
    res.redirect(303, session.url);
  });
app.listen(port,()=>console.log("The server runs at port 5000"));
