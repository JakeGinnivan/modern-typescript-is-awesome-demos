export class Complex {
    foo: string
}

const print = (value: string | string[] | undefined): string => {
    if (!value) {
        value = ''
    }

    if (value instanceof Array) {
        return value.join(' ')
    }

    return value
}

let val = print('6')
val

val = print(['Hi', 'Yow'])
val