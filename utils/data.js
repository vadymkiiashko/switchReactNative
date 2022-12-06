const data = [
    `
    -----
    -xxx-
    -x-x-
    -xxx-
    -----
    ` , 
    `
    x---x
    -x-x-
    --x--
    -x-x-
    x---x
    `,
    `
    --x--
    -x-x-
    x---x
    -x-x-
    --x--
    `
]

const getPattern = () =>{
    const random = Math.floor(Math.random()*(data.length-1));

    return data[random].trim().replaceAll(' ', '').split('\n')
}

export default getPattern