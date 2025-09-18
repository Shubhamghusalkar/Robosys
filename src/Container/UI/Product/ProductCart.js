import UIBody from "../../../Component/UI/UIBody";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useState } from "react";

const ProductCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fire detection alarm",
      price: 499,
      quantity: 1,
      img: "../assets/img/robot-2.png",
    },
    {
      id: 2,
      name: "Caretaker Robot",
      price: 260,
      quantity: 2,
      img: "../assets/img/robot-1.png",
    },
    {
      id: 3,
      name: "Laser security system",
      price: 598,
      quantity: 1,
      img: "../assets/img/robot-2-2.png",
    },
  ]);

  const gstRate = 0.18;

  // Increase Quantity
  const increase = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const gstAmount = subtotal * gstRate;
  const total = subtotal + gstAmount;

  return (
    <UIBody
      content={
        <section className="productCart pt-24 pb-20 text-white">
          <div className="flex justify-center text-4xl font-semibold pb-12">
            Cart
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center flex-wrap gap-4 ps-5 md:ps-10 lg:px-14 text-slate-300 pb-4 font-medium">
            <Link to={"/"} className="flex items-center gap-2">
              <FaHome /> Home
            </Link>{" "}
            <span>
              <MdOutlineDoubleArrow />
            </span>
            <Link to={"/products"}>Products</Link>
            <span>
              <MdOutlineDoubleArrow />
            </span>
            Cart
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-7 px-5 md:px-10 lg:px-14 gap-7 relative">
            {/* Cart Table */}
            <div className="col-span-4 md:col-span-8 lg:col-span-5 overflow-x-auto scrollbar-div">
              <table className="w-full min-w-max border-spacing-y-4 border-separate text-slate-300">
                <thead>
                  <tr>
                    <th className="p-2 text-start">Product Details</th>
                    <th className="p-2">Quantity</th>
                    <th className="p-2">Price</th>
                    <th className="p-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      {/* Product Details */}
                      <td className="border border-slate-600 p-2 bg-slate-800 group rounded-l-lg flex items-center gap-3">
                        <div className="px-2.5 py-1 rounded bg-slate-700">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="group-hover:scale-150 transition-all"
                          >
                            x
                          </button>
                        </div>
                        <Link
                          to={"/product-view"}
                          className="flex items-center gap-3"
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-32 md:w-24 object-contain"
                          />
                          <div className="border-b group-hover:border-gray-300 border-b-transparent">
                            {item.name}
                          </div>
                        </Link>
                      </td>

                      {/* Quantity */}
                      <td className="border border-slate-600 p-2 bg-slate-800 text-center">
                        <div className="flex gap-2 items-center justify-evenly">
                          <button
                            onClick={() => decrease(item.id)}
                            className="px-2 border border-gray-500 bg-slate-600"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => increase(item.id)}
                            className="px-2 border border-gray-500 bg-slate-600"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      {/* Price */}
                      <td className="border border-slate-600 p-2 bg-slate-800 text-center">
                        ₹{item.price.toFixed(2)}
                      </td>

                      {/* Total */}
                      <td className="border border-slate-600 p-2 bg-slate-800 rounded-r-lg text-center">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="col-span-4 md:col-span-4 lg:col-span-2 h-auto">
              <div className="p-5 bg-slate-800 rounded-lg border border-slate-500 sticky top-20 mb-4">
                <p className="text-xl font-semibold lg:text-2xl pb-5 text-pink-600 text-center lg:text-left">
                  Summary
                </p>
                <div className="flex justify-between pb-3 text-sm">
                  Subtotal <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-3 text-sm border-b border-b-slate-700 mb-5">
                  GST 18% <span>₹{gstAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-2 text-md md:text-lg">
                  Total <span>₹{total.toFixed(2)}</span>
                </div>

                <p className="text-xs pb-1 text-pink-600">
                  Enter coupon code here
                </p>
                <input
                  type="text"
                  placeholder="Enter Code"
                  className="w-full rounded px-3 py-2 bg-slate-700 border border-slate-600 outline-none text-sm"
                />
                <br />
                <button className="px-5 py-2 my-4 w-full bg-black text-white hover:bg-gray-950 rounded-md">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </section>
      }
    />
  );
};

export default ProductCart;
