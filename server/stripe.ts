import "dotenv/config";
import express from "express";
import cors from "cors";
import { log } from "console";
import Stripe from "stripe";


const app = express();
const PORT = 5432;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// console.log(stripe);

// middleware
app.use(cors());
app.use(express.json());



/**
 * ROUTE: Create PaymentIntent
 */

app.get('/', async(req, res) => {
    res.send("Hooomies");
});
app.post('/create-payment-intent', async(req, res) => {
    try {
        
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 100,
            currency: "usd"
        });
    
        log("Client Secret Key Generated: ", paymentIntent.client_secret);
    
        res.json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (baderror: any) {
        console.log("Stripe Error:", baderror.message);
        res.status(500).json({ baderror: baderror.message });
    }
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));