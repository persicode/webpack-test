class Post {
    constructor(title) {
        this.title = title
        this.date = new Date()
    }

    toString() {
         return  JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        })
    }
}


// Этот скрипт создает строчку с датой и заголовком