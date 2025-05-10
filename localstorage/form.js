
let form=document.querySelector("form");
let tbody=document.querySelector("table tbody")
// using tag name method
form.addEventListener("submit",(event)=>{
    // lets create local storage
   let userOlddata=JSON.parse(localStorage.getItem("user"))??[]
//    tageting value of form filled by user into input box
// getItem() use to receive data
   let userObject={
       uname:event.target.uname.value,
       email:event.target.email.value,
       phone:event.target.phone.value
   }

    userOlddata.push(userObject)
    // push array data userObject
    localStorage.setItem('user',JSON.stringify(userOlddata))
    // setItem() use to send data,user is keyname  after convert using json send data into local storage
    event.target.reset();
    // reset() function use to  reset form
    event.preventDefault()
})
// to show data in tbody
let userList=()=>{
    // created arrow function name of userList()
    tbody.innerHTML=''
    // for empty tbody
    let userOlddata=JSON.parse(localStorage.getItem("user")) ?? []
    // if entry having show data in string  other wise show empty/blank array
    // ??  is null handling operator
    let rows=''
    userOlddata.forEach((Element,index)=>{
        // use for each loop to get two value element(to get all value from object) or index
        console.log(Element)
        // rows+= due to get value on each loop
        // due to backtick we use dolar with template
        rows+=`<tr>
                    <td>${index+1}</td>
                    <td>${Element.uname}</td>
                    <td>${Element.email}</td>
                    <td>${Element.phone}</td>
                    <td><button onclick="removeRow(${index})">Delete</button</td>
                    <td>Edit</td>
               </tr>`
        
    });
    tbody.innerHTML=rows;
}
userList()
// use to get new entry into local storage

let clearbtn=document.querySelector("#clearBtn");

clearbtn.addEventListener("click",()=> {
    // localStorage.clear()
    // use to delete all local storage entry
    localStorage.removeItem("user")
    // to delete particular local storage item 
})

function removeRow(index){
    let userOlddata=JSON.parse(localStorage.getItem("user")) ?? []
    userOlddata.splice(index,1)
    // splice use to break data into pieces
    localStorage.setItem('user',JSON.stringify(userOlddata))
    userList()
}