import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

function Alert() {
    const { alertName = "", closeAlert } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alertName]);
    return (
        <>
            {window.innerWidth > 768 ? (
                <div className="p-1 border-2 border-blue-600 rounded-lg mr-8">
                    <span className="text-blue-600">
                        Товар {alertName} был добавлен в корзину
                    </span>
                </div>
            ) : null}
        </>
    );
}

export { Alert };
