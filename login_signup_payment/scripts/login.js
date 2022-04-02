let crossbtn=document.getElementById("cross");
crossbtn.addEventListener("click",()=>{
    window.location.href="../index.html"
});


var userData = JSON.parse(localStorage.getItem("users"))||[];
function Signup(e){
    e.preventDefault(e);
    let mobile=document.getElementById("mobile").value;
    let errorMsg=document.getElementById("errortext");

    if(mobile.length==10){
        userData.push(mobile);
        localStorage.setItem("users", JSON.stringify(userData));
        alert("Account Created Successfully");
        window.location.href="login.html";
    }
    else{
        errorMsg.innerText="please enter phone number";
        errorMsg.style.color="red";
        errorMsg.style.fontSize="12px";
    }

    localStorage.setItem("users", JSON.stringify(userData));
}

var flag=true;

function login(e){
    e.preventDefault(e);
    var user1=document.getElementById("user").value;
    console.log('user1:', user1)
    for(var i=0;i<userData.length;i++){
        if(userData[i]== user1 && (user1.length>9)){
            flag=false;
            break;                   
        }
    }
    if(flag===false){
        window.location.href = "../index.html";
    }else{
        alert("The Number you have enetered is not Registered.");
    }
}

let tab1=document.getElementById("tab-1");
tab1.addEventListener("click",()=>{
    window.location.href="login.html"
});

let tab2=document.getElementById("tab-2");
tab2.addEventListener("click",()=>{
    window.location.href="signup.html"
});