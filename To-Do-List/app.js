var userInp=document.querySelector('#userInp');
var taskbtn=document.querySelector('#taskbtn');
var task_list=document.querySelector('#task-list');
taskbtn.addEventListener("click",()=>{
    var task =userInp.Value;
    if(task!=='')
    {
      var newLi=`<li>
                    <input type="checkbox"/>
                    ${task}
                    <button class="Deletebtn">Delete</button>
                </li>`;
      task_list.innerHTML+=newLi;
    //   append
      userInp.value='';
    }
    else
    {
        alert('please fill input!');
    }
    var Deletebtn=document.querySelectorAll('.Deletebtn');
    Deletebtn.forEach(btn=>{
        btn.addEventListener('click',()=>{
            btn.parentNode.remove();
        })
    });
})