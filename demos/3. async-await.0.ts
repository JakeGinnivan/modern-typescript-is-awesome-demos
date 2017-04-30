export type Article = { title: string, topic: string }

const example = (print: (what: any) => void) => {
    getArticle('/foo', data => {
        getRelated(data.topic, related => {
            print({
                article: data,
                related
            })
        })
    })
}

example(what => console.log(JSON.stringify(what)))



/** Callbacks */
function getArticle(url: string, done: (data: Article) => void, error?: (err: Error) => void) {
    if (url.match('fail')) {
        setTimeout(() => {
            error && error(new Error('Oops'))
        });
    }

    setTimeout(() => done({ title: 'Perth AFL Derby', topic: 'Sport' }))
}

function getRelated(topic: string, done: (data: any) => void, error?: (err: Error) => void) {
    if (topic.match('news')) {
        setTimeout(() => {
            error && error(new Error('Oops'))
        });
    }

    setTimeout(() => done([ { title: 'Dockers got thrashed', topic: 'Sport' }]))
}

/** Promises */
function getArticleAsync(url: string): Promise<Article> {
    if (url.match('fail')) {
        return Promise.reject(new Error('Oops'))
    }

    return Promise.resolve({ title: 'Perth AFL Derby', topic: 'Sport' })
}

function getRelatedAsync(topic: string): Promise<Article[]> {
    if (topic.match('news')) {
        return Promise.reject(new Error('Oops'))
    }

    return Promise.resolve([ { title: 'Dockers got thrashed', topic: 'Sport' }])
}