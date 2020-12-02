const serverURL = "http://localhost:5000/"
//const serverURL = "https://password-reset1.herokuapp.com/"


document.getElementById("signUpForm").addEventListener("submit",async (e)=>{
    e.preventDefault()

    body={
        usermail:e.target.usermail.value,
        firstName:e.target.firstName.value,
        lastName:e.target.lastName.value,
        password:e.target.password.value
    }

const req = await fetch(serverURL+"register",{method:"POST",headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },body:JSON.stringify(body)})


debugger


if(req.status==200){//window.location.href="/login.html";
}
else{
const json = await req.json();
alert(json.reason) 


}


})