import Tshirt from "../../assets/Tshirt.jpg";

function Cart () {
    return (
        <section className="min-h-screen bg-gray-200 px-4 sm:px-6 md:px-10 py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center py-6 md:p-8">
                Your Cart
            </h1>

            <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start justify-center lg:justify-around">
            
            <div className="w-full max-w-2xl bg-white flex flex-col sm:flex-row items-center shadow-md gap-4 sm:gap-6 rounded-xl p-4 sm:p-5">
              
              <div>
                <img 
                src={Tshirt}
                alt=""
                className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-lg object-cover" />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h2 className="px-3 py-1 text-lg sm:text-xl md:text-2xl font-semibold">
                    T-Shirt
                </h2>
                <p className="px-3 py-2 text-lg sm:text-xl">₹499</p>

                <div className="flex items-center justify-center sm:justify-start h-10 w-28 border rounded p-2 mx-auto sm:mx-0">
                    <button className="px-3 py-1 text-lg sm:text-xl">
                        -
                    </button>
                    <span className="text-lg sm:text-xl">1</span>
                    <button className="px-3 py-1 text-lg sm:text-xl">
                        +
                    </button>
                </div>
              </div>

              <button className="text-red-500 font-semibold mt-2 sm:mt-0 sm:self-end">
                 Remove
              </button>
            </div>

            <div className="w-full max-w-sm bg-white shadow-md rounded-xl p-5 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-center py-3 sm:p-4">
                    Order Summary
                </h2>

                <div className="text-base sm:text-lg md:text-xl flex justify-between mt-4 mb-2">
                    <span></span>
                    <span>₹499</span>
                </div>

                <div className="text-base sm:text-lg md:text-xl flex justify-between mb-2">
                    <span>Delivery</span>
                    <span>₹50</span>
                </div>

                <div className="text-base sm:text-lg md:text-xl flex justify-between mb-4 font-semibold">
                    <span>Total</span>
                    <span>₹549</span>
                </div>

                <button className="text-lg sm:text-xl md:text-2xl w-full bg-blue-600 text-white font-bold mt-5 p-2 rounded-md">
                    Cheackout
                </button>
            </div>

            </div>
        </section>
    )
}

export default Cart;