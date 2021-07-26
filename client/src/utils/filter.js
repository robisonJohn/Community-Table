// the filter function should take an array of elements from the api and filter by either dry goods or produce

export const filterDryGoods = arr => arr.filter(element => element.category === 'Dry goods');
export const filterProduce = arr => arr.filter(element => element.category === 'Produce');

export const goodItems = arr => arr.filter(element => 
    (element.price * (1 - (element.daysHeld / element.shelfLife))) >= element.price * 0.25
    )
export const needToGo = arr => arr.filter(element => 
    element.price * 0.25 > (element.price * (1 - (element.daysHeld / element.shelfLife)))
    )