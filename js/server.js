class Server {
    constructor(serverList) {
        console.log({ serverList })
        this.id = new Date().getTime()
        this.status = false
        this.startedAt = null
        let div = document.createElement('div')
        div.className = 'server-item'
        div.id = 'server-item-' + this.id
        // div.innerText = 'server-item-' + this.id
        div.innerHTML = `
            <span>
                server-item-${this.id}
            </span>
            <span>
                <button id='delete-server-${this.id}'>
                    Delete
                </button>
            </span>
        `
        serverList.DOM.append(div)
        this.DOM = div
        this.removeServer(serverList.removeServer);
    }

    removeServer(removeServer) {
        document.getElementById('delete-server-' + this.id).addEventListener('click', () => {
            removeServer(this)
        })
    }

    executeTask(task){
        if (this.status == false) {
            task.DOM.classList.add("active");
            task.status = true
            this.status = true
            this.startedAt = new Date().getTime()
            // remove the delete button
            document.getElementById('delete-button-' + task.id).style.display = 'none'
            setTimeout(() => {
                task.status = 'completed'
                this.status = false
                this.startedAt = null
                //should we remove the task after completion? Not clear.
            }, 20000)
            return true
        }
        console.log(`could not start ${task.id} on server ${this.id} as the server was busy`)
        return false
    }

}

