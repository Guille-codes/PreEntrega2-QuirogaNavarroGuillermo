import "./CartWidget.css"
import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom"

export const CartWidget = () => {
  return (
    <div className="container-cart">
      <Link to="/cart">
        <FaShoppingCart
          style={{
            fontSize: "2rem",
            color: "#211617",
          }}
        />
        <div className="bubble-counter">
          <span>10</span>
        </div>
      </Link>
    </div>
  )
}
