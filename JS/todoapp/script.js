let todos=[]
function addtask(){
    const taskinput= document.getElementById('task');
    todos.push({id:Date.now(),task:taskinput.value,completed:false});
    taskinput.value='';
    console.log('Task added',todos);
    displayData();
}

document.getElementById('btn').addEventListener('click',addtask)

function displayData(){
    const tasklist=document.getElementById('tasks')
    if(todos.length==0){
        tasklist.innerHTML=`<li> List is empty</li>`
    }else{
        let html=''
        for(let t of todos){
            html += `<li>${t.task}
            <button class='btn btn-danger float-end' onclick='deleteTask("${t.id}")'>X</button>
            </li>`
        }
        tasklist.innerHTML=html;
    }
}
function deleteTask(id){
    console.log("Called");
    let found=undefined
    for(let i=0;i<todos.length;i++){
        if(todos[i].id==id){
            found=i;
            break;
        }
    }
    if(found!=undefined){
        todos.splice(found,1);
        alert("Task Deleted")
        displayData();
    }
}

displayData()