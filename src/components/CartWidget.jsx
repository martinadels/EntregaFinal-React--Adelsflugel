import cart from "../assets/cart.png"

const styles = {
    img: {
        height: "2rem",
        width: "auto",
    },
    span:{
        color: "white",
    }
}

export const CartWidget = () => (
    <>
        <img src={cart} style={styles.img} alt="Chango" /> <span style={styles.span}>0</span>
    </>
)