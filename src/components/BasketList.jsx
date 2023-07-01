import { BasketItem } from "./BasketItem";
import { ShopContext } from "../context";
import { useContext } from "react";

function BasketList() {
    const { order = [], handleBasketShow } = useContext(ShopContext);

    const totalPrice = order.reduce(
        (sum, el) => sum + el.price * el.quantity,
        0
    );

    return (
        <div className="min-[800px]:w-[50rem] bg-white border-4 border-gray-300 rounded-l-lg flex flex-col h-screen max-w-full z-50 fixed top-0 right-0">
            <div className="p-4 flex justify-between border-b-4">
                <span className="text-2xl font-semibold tracking-tight">
                    Корзина
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 cursor-pointer hover:text-blue-700 transition-all"
                    onClick={handleBasketShow}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <ul className="overflow-auto h-full">
                {order.length ? (
                    order.map((item) => (
                        <BasketItem key={item.id} item={item} />
                    ))
                ) : (
                    <li className="p-4 text-3xl font-semibold">
                        Добавленый товар будет находится здесь...
                    </li>
                )}
            </ul>
            <div className="p-4 border-t-4">
                <span className="text-2xl font-semibold tracking-tight">
                    Общая стоимость: {totalPrice}
                </span>
            </div>
        </div>
    );
}

export { BasketList };
