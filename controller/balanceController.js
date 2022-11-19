const Balance = require("../model/balance")
const axios = require("axios");;
const axiosInstance = axios.create({
    baseURL: "https://seerbitapi.com/"
})


const makePayment = async (req, res) => {
    try {
        const token = req.token
        const userResponse = await axiosInstance({
            url: `paymentlink/v2/payLinks/api`,
            method: "post",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: {
                "status": "ACTIVE",
                "paymentLinkName": "Donations",
                "description": "Give out donations",
                "currency": "NGN",
                "successMessage": "Thank you for your payment",
                "publicKey": "PublicKey",
                "customizationName": "utbesti22",
                "paymentFrequency": "RECURRENT",
                "paymentReference": "",  // optional
                "email": "js@emaildomain.com",
                "requiredFields": {
                    "address": true,
                    "amount": true,
                    "customerName": true,
                    "mobileNumber": true,
                    "invoiceNumber": false
                },
                "additionalData": "custom1:null||custom2:null||custom3:null", //optional
                "linkExpirable": false,
                "expiryDate": "",
                "oneTime": false
            }
        });

        console.log(userResponse)
    } catch (error) {
        res.status(500).json("Something went wrong")
    }
}

const sendMoney = async (req, res) => {
    try {
        const token = req.token
        const reqREsponse = await axiosInstance({
            url: `api/v2/payments/initiates`,
            method: "post",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: {
                "publicKey":"SBTESTPUBK_n4HFSPUTPy8jnXCI17tNsXssIFNwAZmF",
                "amount":"2000.00",
                "fee":"10",
                "fullName":"John Doe",
                "mobileNumber":"08037456590",
                "currency":"NGN",
                "country":"NG",
                "paymentReference":"UYTRE234566677RDFGFDDSS",
                "email":"johndoe@gmail.com",
                "productId":"Foods",
                "productDescription":"Uba Account Transaction ",
                "clientAppCode":"kpp64",
                "redirectUrl":"https://checkout.seerbit.com",
            }
        })
        console.log(reqREsponse.data)
    } catch (error) {
        res.status(500).json({error})
    }
}


module.exports = {
    makePayment,
    sendMoney
}