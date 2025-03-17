require("dotenv").config();
const express = require("express");
const stripe = require("stripe")("TU_CLAVE_PRIVADA_STRIPE");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/crear-checkout-session", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "cop",
                        product_data: { name: "Tiquete de Bus" },
                        unit_amount: 13500000, // $135.000 COP en centavos
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:3000/exito.html",
            cancel_url: "http://localhost:3000/error.html",
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
