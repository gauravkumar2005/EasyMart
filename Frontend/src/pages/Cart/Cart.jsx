import Tshirt from "../../assets/Tshirt.jpg";

function Cart () {
    return (
        <section className="min-h-screen bg-gray-200">
            <h1 className=" text-4xl font-bold text-center p-8">
                Your Cart
            </h1>

            <div className=" flex  flex-col lg:flex-row gap-6 items-center lg:items-start justify-center lg:justify-around">
            <div className="w-full max-w-2xl bg-white flex flex-col sm:flex-row items-center shadow-md  gap-6 rounded-xl p-4 sm:p-5">
              <div>
                <img 
                src={Tshirt}
                alt=""
                className="h-30 w-30 rounded-lg" />
              </div>
              <div className="flex-1">
                <h2 className="px-3 py-1 text-2xl font-semibold">
                    T-Shirt
                </h2>
                <p className="px-3 py-2 text-xl">₹499</p>
                <div className="flex items-center h-10 w-25 border rounded p-2">
                    <button className=" px-3 py-2 text-xl">
                        -
                    </button>
                    <span className="text-xl">1</span>
                    <button className=" px-3 py-2 text-xl">
                        +
                    </button>
                </div>
              </div>
              <button className="text-red-500 font-semibold mt-20">
                 Remove
              </button>
            </div>
            <div className="h-90 w-80 bg-white shadow-md rounded-xl p-6">
                <h2 className="text-2xl font-bold text-center p-4">
                    Order Summary
                </h2>
                <div className="text-xl flex justify-between mt-5 mb-3">
                    <span>Subtotal</span>
                    <span>₹499</span>
                </div>
                     <div className=" text-xl flex justify-between mb-3">
                    <span>Delivery</span>
                    <span>₹50</span>
                </div>
                <div className="text-xl flex justify-between mb-4">
                    <span>Total</span>
                    <span>₹549</span>
                </div>
                <button className="text-2xl w-full bg-blue-600 text-white font-bold  mt-7 p-2 rounded-md ">
                    Cheackout
                </button>
            </div>
            </div>
        </section>
    )
}

export default Cart;