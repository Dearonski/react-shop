import { useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { useSelector, useDispatch } from "react-redux";
import { handleBasketShow, setGoods } from "../store/shopSlice";
import { Preloader } from "../layout/Preloader";
import { GoodsList } from "./GoodsList";
import { BasketList } from "./BasketList";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { CSSTransition } from "react-transition-group";

function Shop() {
    const { loading, order, isBasketShow } = useSelector(
        (state) => state.shops
    );
    const dispatch = useDispatch();

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: { Authorization: API_KEY },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && dispatch(setGoods(data.featured));
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <CSSTransition
                in={isBasketShow}
                unmountOnExit
                timeout={300}
                classNames="basket"
            >
                <BasketList />
            </CSSTransition>
            <Header
                quantity={order
                    .map((item) => item.quantity)
                    .reduce((a, b) => a + b, 0)}
            />
            <CSSTransition
                in={isBasketShow}
                unmountOnExit
                timeout={300}
                classNames="black-screen"
            >
                <div
                    className="w-full h-screen bg-black/[.6] z-30 fixed top-0 "
                    onClick={() => dispatch(handleBasketShow())}
                ></div>
            </CSSTransition>
            <div className="flex">
                <main className="container mx-auto p-4 min-h-[86vh]">
                    {loading ? <Preloader /> : <GoodsList />}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Shop;
