// the filter function should take an array of elements from the api and filter by either dry goods or produce

export const filterDryGoods = arr => arr.filter(element => element.category === 'Dry goods');
export const filterProduce = arr => arr.filter(element => element.category === 'Produce');