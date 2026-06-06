fetch("./misc/output.txt")
    .then(x => x.text())
    .then(y => document.getElementById("demo").innerHTML = y);

const stripe = Stripe("pk_test_51QpaRRKQPBMqH0dwdewJv5Wv7aP4zPUncD7my8vB7ZQVUF0UscNIVDkj1gcWW0jcBvdMq16u7fsuI1INRlFLOWbC00G35AAsQp");


document.getElementById("donate").addEventListener("click", async () => {
    const res = await fetch("http://localhost:5432/create-payment-intent", { method: "POST" });
    
    // console.log(res);
    
    const { clientSecret } = await res.json();
})