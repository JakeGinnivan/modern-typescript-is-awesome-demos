export type Article = { title: string, topic: string }

const example = async (print: (what: any) => void) => {
    const data = await getArticleAsync('/foo')
    const related = await getRelatedAsync(data.topic)
    print({
        article: data,
        related
    })
}

example(what => console.log(JSON.stringify(what)))



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