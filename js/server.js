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

}

