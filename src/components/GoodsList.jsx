import { GoodsItem } from "./GoodsItem";
import { useSelector } from "react-redux";

function GoodsList() {
    const { goods = [] } = useSelector((state) => state.shops);

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
