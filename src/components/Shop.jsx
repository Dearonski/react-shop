import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "../layout/Preloader";
import { GoodsList } from "./GoodsList";
import { BasketList } from "./BasketList";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { CSSTransition } from "react-transition-group";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBacketShow, setBacketShow] = useState(false);
    const [alertName, setAlertName] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const addToBacket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.name);
        setShowAlert(true);
    };

    const handleBacketShow = () => {
        setBacketShow(!isBacketShow);
        const body = document.querySelector("body");
        body.classList.toggle("overflow-hidden");
    };

    const removeFromBacket = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder);
    };

    const incQuantity = (itemId) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.id === itemId) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1,
                };
            } else {
                return orderItem;
            }
        });
        setOrder(newOrder);
    };

    const decQuantity = (itemId) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.id === itemId) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity - 1,
                };
            } else {
                return orderItem;
            }
        });
        setOrder(newOrder);
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: { Authorization: API_KEY },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(
                    data.featured.reduce((acc, item) => {
                        if (acc.map((item) => item.id).includes(item.id)) {
                            return acc;
                        }
                        return [...acc, item];
                    }, [])
                );
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <CSSTransition
                in={isBacketShow}
                unmountOnExit
                timeout={300}
                classNames="basket"
            >
                <BasketList
                    order={order}
                    handleBacketShow={handleBacketShow}
                    removeFromBacket={removeFromBacket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            </CSSTransition>
            <Header
                quantity={order
                    .map((item) => item.quantity)
                    .reduce((a, b) => a + b, 0)}
                handleBacketShow={handleBacketShow}
                name={alertName}
                closeAlert={closeAlert}
                showAlert={showAlert}
            />
            <CSSTransition
                in={isBacketShow}
                unmountOnExit
                timeout={300}
                classNames="black-screen"
            >
                <div
                    className="w-full h-screen bg-black/[.6] z-30 fixed top-0 "
                    onClick={handleBacketShow}
                ></div>
            </CSSTransition>

            <div className="flex">
                <main className="container mx-auto p-4 min-h-[86vh]">
                    {loading ? (
                        <Preloader />
                    ) : (
                        <GoodsList goods={goods} addToBacket={addToBacket} />
                    )}
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default Shop;
