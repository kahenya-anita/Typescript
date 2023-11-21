//GENERICS
//We use <T> OR <Type> as a way of capturing the type of the argument 
//in such a way that we can also use it to denote what is being returned.

// const names = ["Max", "Anita"]
const names: Array<string> = []

interface Lengthy {
    length: number
}
function countAndPrint<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = 'Got no value'
    if (element.length === 1) {
        descriptionText = 'Got 1 element'
    }else if (element.length > 1){
    descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText]
}

console.log(countAndPrint('Hi there!'))