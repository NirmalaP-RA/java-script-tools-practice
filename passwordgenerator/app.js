var char=[
   "qwertyuiopasdfghjklzxcvbnm",
   "QWERTYUIOPASDFGHJKLZXCVBNM",
   "1234567890",
   "!@#$%^&*()_=-+={}[];<>:"
]
// value define in array form by using its indexing we decide are group of  password

var generateBtn=document.querySelector("#generate");
var allCheckbox=document.querySelectorAll(".setting input[type='checkbox']")
var txtLength=document.querySelector("#length")
var resultBox=document.querySelector("#result")

// create variable and using dom property we call value of id and class
generateBtn.addEventListener(('click'),()=>{
    var finalchar='';
    allCheckbox.forEach((Checkbox,index)=>{
    // console.log(Checkbox,index)
    if(Checkbox.checked){
        finalchar=finalchar+char[index]
        // console.log(Checkbox,index)
    }
  })

// apply checkbox and check its checked checkbox according to index value to create password

  var finalPass=''
  for(var i=0;i<txtLength.value;i++){
    finalPass+=finalchar.charAt(Math.floor(Math.random()*finalchar.length))
  }
//   console.log(finalPass)
    resultBox.innerHTML=finalPass
    })

    // here by runing loop and using charAt() we generate random password according to given length and checked checkbox
    var clipboard=document.querySelector("#clipboard")
    clipboard.addEventListener("click",()=>{
    var result=resultBox.innerHTML;
    navigator.clipboard.writeText(result)
})
// here we are using clipboard to copy randomly generated password from clipboard by calling its id using callback function