import { TOrderedUserInfo, TOrdrededProduct, TProduct } from "../types"

const useGetOrderInfo = (userInfo:TOrderedUserInfo |'', clientSecret:string, cartItems:TProduct[]) => {

    let totalPrice = 0
    const orderedProducts:TOrdrededProduct[] = []

   
    cartItems.map((item) => {
        orderedProducts.push({
            productId: item._id,
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

    return {orderData, totalPrice}
}


export default useGetOrderInfo;