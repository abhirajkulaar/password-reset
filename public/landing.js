async function main(){

    const userData = await fetch("/userDetails")
    debugger
    const userDataJson = await userData.json()
    if(userData.status!=200){ window.location.href="/logout"}

    //const userDataJson = await userData.json()

    document.getElementById("userName").innerText=userDataJson.firstName

}

main()
document.getElementById("logout").addEventListener("click",()=>{

    window.location.href="/logout"
})