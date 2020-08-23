class ServerList {
    constructor() {
        this.DOM = document.getElementById('server-list')
        this.serverList = []
        this.subscribers = []
        this.addServer()
    }

    addServer = () => {
        if (this.serverList.length < 10) {
            this.serverList.push(new Server(this))
        }
    }

    removeServer = (server) => {
        if (server.status == false) {
            if (this.serverList.length > 1) {
                this.serverList = this.serverList.filter(item => {
                    return item.id != server.id
                })
                server.DOM.remove()
            }
        }
        else {
            const timeDelay = server.startedAt + 20000 - new Date().getTime()
            console.log(timeDelay)
            if (timeDelay < 0) {
                timeDelay = 0
            }
            setTimeout(() => {
                if (this.serverList.length > 1) {
                    this.serverList = this.serverList.filter(item => {
                        return item.id != server.id
                    })
                    server.DOM.remove()
                }
            }, timeDelay)
        }
    }
}
