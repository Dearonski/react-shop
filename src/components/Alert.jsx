import { useEffect } from "react";

function Alert(props) {
    const { name = "", closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 2300);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);
    return (
        <>
            {window.innerWidth > 768 ? (
                <div className="p-1 border-2 border-blue-600 rounded-lg mr-8">
                    <span className="text-blue-600">
                        Товар {name} был добавлен в корзину
                    </span>
                </div>
            ) : null}
        </>
    );
}

export { Alert };
