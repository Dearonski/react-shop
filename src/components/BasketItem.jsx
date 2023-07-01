import { useDispatch } from "react-redux";
import { removeFromBasket, incQuantity, decQuantity } from "../store/shopSlice";

function BasketItem(props) {
    const { id, name, price, quantity, image } = props.item;
    const dispatch = useDispatch();

    const deleteItem = (e, id) => {
        e.currentTarget.parentElement.parentElement.style.opacity = "0";
        setTimeout(() => dispatch(removeFromBasket(id)), 300);
    };

    return (
        <li className="border-b-4 last:border-none p-4 md:py-4 md:px-0 md:pr-2 grid grid-cols-6 grid-rows-6 md:grid-cols-12 md:grid-rows-1 duration-300 flex-col sm:flex-row">
            <div className="flex justify-center items-center md:col-span-1 cursor-pointer row-span-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 hover:text-blue-700 transition-all"
                    onClick={(e) => {
                        deleteItem(e, id);
                    }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <div className="bg-gray-200 rounded-lg flex justify-center items-center md:col-span-4 col-span-4 row-span-3">
                <img src={image} alt={name} className="w-40" />
            </div>
            <div className="md:col-span-3 flex justify-center items-center px-8 col-span-6">
                <span className="text-xl font-semibold tracking-tigh text-left inline-block">
                    {name}
                </span>
            </div>
            <div className="md:col-span-3 flex justify-center text-2xl items-center col-span-6">
                <button
                    className="w-12 h-12 bg-gray-200 rounded-xl hover:bg-gray-300 transition-all"
                    onClick={() => dispatch(incQuantity(id))}
                >
                    +
                </button>
                <span className="p-4">{quantity}</span>
                <button
                    className="w-12 h-12 bg-gray-200 rounded-xl hover:bg-gray-300 transition-all"
                    onClick={(e) => {
                        if (quantity === 1) {
                            deleteItem(e, id);
                        } else {
                            dispatch(decQuantity(id));
                        }
                    }}
                >
                    -
                </button>
            </div>
            <div className="md:col-span-1 flex justify-center items-center col-span-6">
                <span className="text-2xl">{price * quantity}</span>
            </div>
        </li>
    );
}

export { BasketItem };
