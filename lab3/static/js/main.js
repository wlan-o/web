let add=document.querySelector('#add');
let task=document.querySelector('#input');
let list=document.querySelector('#list');
let taskList=[];

add.addEventListener('click',function(){
    if (task.value!=""){
        let temp={
            task:task.value,
            done:false
        };
        task.value="";
        taskList.push(temp);
        console.log(taskList);
        show_tasks();
    }
})

list.addEventListener('change',function(event){
    let changedId=event.target.getAttribute('id');
    for(let i=0;i<taskList.length;++i){
        if (taskList[i].id==parseInt(changedId.substring(5,changedId.length))){
            console.log(taskList[i].done)
            taskList[i].done=!taskList[i].done;
            console.log(taskList[i].done)
            show_tasks();
            break;
        }
    }
});
list.addEventListener('click',function(event){
    let changedId=event.target.getAttribute('id');
    for(let i=0;i<taskList.length;++i){
        if (taskList[i].id==parseInt(changedId.substring(5,changedId.length))){
            taskList.pop()
            show_tasks();
            break;
        }
    }
});

function show_tasks(){
    tasks="";
    for(let i=0;i<taskList.length;++i){
        tasks+="<li"+(taskList[i].done?" class=\"done\"":"")+"><input id=\"task_"+i+"\" type=\"checkbox\""
        +(taskList[i].done?" checked":" ")+(taskList[i].done?(" id=task_"+i):"")
        +"></input>"+taskList[i].task+"</li>"+'\n';
        taskList[i].id=i;
    }
    list.innerHTML=tasks;
};

