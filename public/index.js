const serverURL = "http://localhost:5000/"
//const serverURL = "https://password-reset1.herokuapp.com/"

document.getElementById("loginForm").addEventListener("submit",async (e)=>{
    e.preventDefault()

    body={
        usermail:e.target.usermail.value,
        password:e.target.password.value
    }

const req = await fetch("/login",{method:"POST",headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },body:JSON.stringify(body)})


debugger


if(req.status==200){window.location.href="/login";
}
else{
const json = await req.json();
alert(json.reason) 


}


})


