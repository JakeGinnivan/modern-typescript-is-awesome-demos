interface Coffee {
    cost: number
    type: 'long mac' | 'latte' | 'flat white'
    size: 'small' | 'medium'
}

interface Beer {
    cost: number
    style: 'lager' | 'pale ale'
}




type Drink = Coffee | Beer
type OrderWithQty = { drink: Drink, qty: number }






const isDrinkWithQty = (drinkOrder: Drink | OrderWithQty): drinkOrder is OrderWithQty => {
    return 'qty' in drinkOrder
}

const formatLine = (drinkOrder: OrderWithQty) => {
    return `${drinkOrder.qty}x ${formatDrink(drinkOrder.drink)}`
}

const toDrinkWithQty = (drinkOrder: Drink | OrderWithQty): OrderWithQty => {
    if (isDrinkWithQty(drinkOrder)) {
        return drinkOrder
    }
    return { drink: drinkOrder, qty: 1 }
}






/**
 * Takes list of drinks, or drinks with QTY
 */
export const order = (drinks: Array<Drink | OrderWithQty>) => {
    const orderDetails = drinks.reduce((accumulator, value) => {
        const drinkWithQty = toDrinkWithQty(value)

        return {
            total: drinkWithQty.qty * drinkWithQty.drink.cost + accumulator.total,
            orderSummary: accumulator.orderSummary + `\n${formatLine(drinkWithQty)}`
        }
    }, { total: 0, orderSummary: ''})

    return `Order Ticket
${orderDetails.orderSummary}

total: ${orderDetails.total}`
}






const result = order([
    { cost: 1.5, type: 'long mac', size: 'small' },
    { cost: 1, style: 'lager' },
    { drink: { cost: 1, style: 'pale ale' }, qty: 2 },
])

result












function formatDrink(drink: Drink & { [key: string]: any}) {
    return Object.keys(drink)
        .filter(k => k !== 'cost')
        .map(k => `${k}=${drink[k]}`)
        .join(', ')
}