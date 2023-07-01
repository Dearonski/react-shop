export function reducer(state, { type, payload }) {
    const hide_scroll = () => {
        let body = document.querySelector("body");
        body.classList.toggle("overflow-hidden");
    };

    switch (type) {
        case "SET_GOODS":
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id),
            };
        case "ADD_TO_BASKET":
            const itemIndex = state.order.findIndex(
                (el) => el.id === payload.id
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                showAlert: true,
                alertName: payload.name,
                order: newOrder,
            };
        case "HANDLE_BASKET_SHOW":
            hide_scroll();
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };
        case "INC_QUANTITY":
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        return {
                            ...el,
                            quantity: el.quantity + 1,
                        };
                    }
                    return el;
                }),
            };
        case "DEC_QUANTITY":
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        return {
                            ...el,
                            quantity: el.quantity - 1,
                        };
                    }
                    return el;
                }),
            };
        case "CLOSE_ALERT":
            return {
                ...state,
                showAlert: false,
            };

        default:
            return state;
    }
}
