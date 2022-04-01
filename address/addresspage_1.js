
let arraydata=[];
let btn=document.getElementById("submit")

btn.addEventListener("click",function (event){
    event.preventDefault();
    var name = document.getElementById("name1").innerHTML;

    var address = document.getElementById("address1").value;
    console.log(arraydata);

    var mobile = document.getElementById("mobile1").value;
    console.log(arraydata);


    var data = {
        name:name,
        address:address,
        mobile:mobile
    };

    arraydata.push(data);
    console.log(arraydata);
    localStorage.setItem("datavalue",JSON.stringify(arraydata));

    window.location.href = "/login_signup_payment/debitcard.html";
});

