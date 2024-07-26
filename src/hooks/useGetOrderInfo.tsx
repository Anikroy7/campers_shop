import { useAppSelector } from "../redux/hook";

const { cartItems } = useAppSelector((state) => state.cart);
let totalPrice = 0
const orderedProducts = []

const useGetOrderInfo = (userInfo='', clientSecret) => {
    const orderData = {
        ...userInfo, products: orderedProducts, totalPrice,clientSecret
    
    }
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


    return orderData
}


export default useGetOrderInfo;