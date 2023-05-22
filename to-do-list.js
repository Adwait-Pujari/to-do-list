let task = [];
function createList(name, date)
{
    this.name = name;
    this.date = date;
}

function addToList()
{
    let nameHTML = document.querySelector('.input-text-area');
    let dateHTML = document.querySelector('.input-date-and-time');
    let name = nameHTML.value;
    let date = dateHTML.value;
    
    if (name != '' && date != '') {
        task.push(new createList(name, date));
        displayTasks(task);
    }
    clearInput(nameHTML, dateHTML);
}

function displayTasks(task)
{
    document.querySelector('.todo-grid').innerHTML = '';
    let displayTask = ' ';
    let flag = 0;
    for(let i = 0; i < task.length; i++)
    {
        const taskList = task[i];
        const { name, date} = taskList;
        flag = 1;
        if (name === '' || date == '') {
            flag = 0;
        }
        if(flag){
            const taskHTML= updateList(name, date, i);
            displayTask += taskHTML;
        }

    }
    
    if(flag)
        document.querySelector('.todo-grid').innerHTML = displayTask;
    
}

function updateList(name, date, i)
{
    
    const updateGridHTML = `
        <p> <span class = 'name-display'> ${name} </span>  
            <span class = 'date-display'> ${date} </span> 
        <button class = 'delete-button' onclick = 'deleteTask(${i});'>Delete</button></p>
    `;

    return updateGridHTML;
}

function deleteTask(i)
{
    task.splice(i, 1);
    for(let i = 0; i < task.length; i++)
    {
        console.log(task[i]);
    }    
    displayTasks(task);
}

function  clearInput(nameHTML, dateHTML)
{
    nameHTML.value = '';
    dateHTML.value = '';
}