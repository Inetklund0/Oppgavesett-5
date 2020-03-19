const inpPass =document.querySelector ("#inpPass")
const inpPassord =document.querySelector ("#inpPassord")

if ("${inpPass}" === "${inpPassord}"){
    console.log("Passordene er like")
} 

else if ("${inpPass}" > "${inpPassord}"){
    console.log ("Passordene er ulike")
}

else if ("${inpPass}" < "${inpPassord}"){
    console.log ("Passord er ulike")
}