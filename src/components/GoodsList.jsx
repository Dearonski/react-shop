import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBacket = Function.prototype } = props;

    if (goods.length === 0) {
        return <h3>Nothing here</h3>;
    }
    return (
        <div className="grid gap-4 grid-cols-movies justify-items-center">
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item} addToBacket={addToBacket} />
            ))}
        </div>
    );
}

export { GoodsList };
