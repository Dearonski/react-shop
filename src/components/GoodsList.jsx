import { GoodsItem } from "./GoodsItem";
import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsList() {
    const { goods = [] } = useContext(ShopContext);

    if (goods.length === 0) {
        return <h3>Nothing here</h3>;
    }
    return (
        <div className="grid gap-4 grid-cols-movies justify-items-center">
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item} />
            ))}
        </div>
    );
}

export { GoodsList };
