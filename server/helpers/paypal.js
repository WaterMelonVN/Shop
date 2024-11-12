const paypal = require("paypal-rest-sdk");

paypal.configure({
    mode: "sandbox",
    client_id:
        "Ae5Yzd7gvIAAyMTDEcqDgtiDtCu3BJOAUh3TPfETkxdR2u1KEudpQjF4HM0rv_mkODxgcdRl5XbQNnva",
    client_secret:
        "EP_5YbmMoBLbNzbrBv0wD43-nGC75yxNzzZDnhuLUMEuaXRrYeXSsAV0Ty29Qj-JI8b2V80Mwmf0ja75",
});

module.exports = paypal;
