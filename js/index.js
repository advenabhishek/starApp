document.addEventListener("DOMContentLoaded", () => {
    //INTIALIZE SERVER AND TASKS
    var serverList = new ServerList()
    var taskList = new TaskList()

    //ADD SERVER
    let addServerButton = document.getElementById('add-server-button')
    addServerButton.addEventListener('click', () => {
        serverList.addServer()
    })

    //ADD TASK
    let addTaskButton = document.getElementById('add-task-button')
    addTaskButton.addEventListener('click', () => {
        let inputTask = document.getElementById('number-of-task')
        let value = inputTask.value
        // if (value > 500) {
        //     value = 500
        //     inputTask.value = 500
        // } else if(value < 1){
        //     value = 1
        //     inputTask.value = 1
        // }
        for (let i = 0; i < value; i++)
            taskList.addTask()
    })


    //worker
    setInterval(() => {
        //delete completed task from list? Not clear.

        let freeServerList = serverList.serverList.filter(item => {
            return item.status == false
        })

        console.log('BUSY SERVERS :: ', serverList.serverList.filter(item => {
            return item.status !== false
        }))
        let openTaskList = taskList.taskList.filter(item => {
            return item.status == false
        })
        // console.log('free servers :: ', freeServerList,openTaskList)

        while (openTaskList.length && freeServerList.length) {
            console.log(openTaskList.length, freeServerList.length)
            let task = openTaskList.shift()
            let server = freeServerList.pop()
            task.start(server)
        }
    }, 2000)
});
