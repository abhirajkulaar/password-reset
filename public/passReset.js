document.getElementById("sendRequestForm").addEventListener("submit",async e=>{

    e.preventDefault()

    body={
        usermail:e.target.usermail.value,
        
    }

const req = await fetch("/forgotPasswordRequest",{method:"POST",headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },body:JSON.stringify(body)})





if(req.status==200){
   e.target.classList.add("d-none")
    document.getElementById("changePassform").classList.remove("d-none")
    document.getElementById("resetMail").value=e.target.usermail.value
}
else{
const json = await req.json();
alert(json.reason) 


}



})

document.getElementById("changePassform").addEventListener("submit",async e=>{

    e.preventDefault()

    body={
        usermail:e.target.usermail.value,
        password:e.target.password.value,
        resetCode:e.target.resetCode.value
    }

const req = await fetch("/forgotPasswordReset",{method:"POST",headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },body:JSON.stringify(body)})





if(req.status==200){
    alert("Password Reset! Pls login")
  window.location.href="/login"
}
else{
const json = await req.json();
alert(json.reason) 


}



})