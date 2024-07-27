
const useGetOrderInfo = (userInfo = '', clientSecret, cartItems) => {

    let totalPrice = 0
    const orderedProducts = []

   
    cartItems.map((item) => {
        orderedProducts.push({
            id: item._id,
            quantity: item.quantity
        })
    })
    totalPrice = cartItems.reduce((acc, curr) => {
        acc += (curr.price * curr.quantity)
        return acc
    }, 0)
    const orderData = {
        ...userInfo, products: orderedProducts, totalPrice, clientSecret

    }

    return orderData
}


export default useGetOrderInfo;