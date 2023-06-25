const express = require("express")
const connectDB = require("./Connection")
const app =express()
const cors = require("cors")
const users = require("./route")
require("dotenv").config()
const stripe = require('stripe')(process.env.STRIPE_KEY);

app.use(express.json())
app.use(cors())
app.use("/api/v1/users",users)

app.get("/",(req,res) => {
    res.send("hello")
})
app.post("/create-checkout-session", async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items : req.body.map(item=>{
            return {
                price_data: {
                          currency: "inr",
                          product_data: {
                            name: item.title,
                          },
                          unit_amount: item.price*100,
                        },
                        quantity: item.quantity,
            }
        }),
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cancel`,
      })
      res.json({ url: session.url })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  })
const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,console.log(`server is listening to port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()