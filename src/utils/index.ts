const array:number[] = []

export const getThreeRandomNumber = (max:number) => {
    while (array.length < 3) {
        const number = Math.floor(Math.random() * max + 1)
        if (!array.includes(number)) {
            array.push(number)
        }
    }
    return array
}




