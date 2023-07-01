import { ShopContext } from "../context";
import { useContext } from "react";

function GoodsItem(props) {
    const { id, name, description, price, image } = props;

    const { addToBasket } = useContext(ShopContext);

    return (
        <div id={id} className="w-72 flex flex-col justify-between">
            <div className="border-gray-100 border-4 bg-gray-100 rounded-3xl overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    onError={(e) => {
                        e.target.src = `https://placehold.co/300x300?text=${name}`;
                        e.target.onError = null;
                    }}
                    className=" hover:scale-105 transition-all"
                />
            </div>

            <div className="p-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tigh text-gray-800 hover:text-blue-600 transition-all">
                    {name}
                </h5>
                <p className="text-gray-800">{description}</p>
            </div>
            <div>
                <span className="text-xl p-4">Цена: {price}</span>
                <div className="flex justify-between">
                    <button
                        className="m-2 p-2 transition-all flex items-center hover:underline text-blue-600"
                        onClick={() =>
                            addToBasket({
                                id,
                                name,
                                price,
                                image,
                            })
                        }
                    >
                        <span className="text-blue-600 text-2xl">Купить</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="w-5 h-5 text-blue-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export { GoodsItem };
