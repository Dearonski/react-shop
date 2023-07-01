import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: "",
    showAlert: false,
};

const shopSlice = createSlice({
    name: "shops",
    initialState,
    reducers: {
        closeAlert(state) {
            state.showAlert = false;
        },
        removeFromBasket(state, action) {
            state.order = state.order.filter((el) => el.id !== action.payload);
        },
        handleBasketShow(state) {
            state.isBasketShow = !state.isBasketShow;
        },
        incQuantity(state, action) {
            state.order = state.order.map((item, index) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
        },
        decQuantity(state, action) {
            state.order = state.order.map((item, index) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            });
        },
        addToBasket(state, action) {
            const itemIndex = state.order.findIndex(
                (el) => el.id === action.payload.id
            );
            if (itemIndex < 0) {
                const newItem = {
                    ...action.payload,
                    quantity: 1,
                };
                state.order.push(newItem);
            } else {
                const newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
                state.order = newOrder;
            }
            state.alertName = action.payload.name;
            state.showAlert = true;
        },
        setGoods(state, action) {
            state.goods = action.payload || [];
            state.loading = false;
        },
    },
});

export const {
    closeAlert,
    removeFromBasket,
    handleBasketShow,
    incQuantity,
    decQuantity,
    addToBasket,
    setGoods,
} = shopSlice.actions;

export default shopSlice.reducer;
