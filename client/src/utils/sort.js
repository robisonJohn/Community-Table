const compareKey = key => (a,b) => {
    if (a[key] < b[key]) {
        return -1
    }
    if (a[key] > b[key]) {
        return 1
    }
    return 0
}

/*
Not sure if a sort function makes sense here; might make more sense to filter by produce or dry goods. 
However, this is fine for now.
*/

export const lowestQuantity = arr => arr.sort((a, b) => parseInt(a.quantity) - parseInt(b.quantity))
export const highestQuantity = arr => arr.sort((a, b) => parseInt(b.quantity) - parseInt(a.quantity))

export const lowestPrice = arr => arr.sort((a,b) => parseInt(a.price) - parseInt(b.price))
export const highestPrice = arr => arr.sort((a,b) => parseInt(b.price) - parseInt(a.price))

export const lowestShelfLife = arr => arr.sort((a,b) => parseInt(a.shelfLife) - parseInt(b.shelfLife))
export const highestShelfLife = arr => arr.sort((a,b) => parseInt(b.shelfLife) - parseInt(a.shelfLife))