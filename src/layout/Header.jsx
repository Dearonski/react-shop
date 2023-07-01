import { Alert } from "../components/Alert";
import { CSSTransition } from "react-transition-group";
import { ShopContext } from "../context";
import { useContext } from "react";

function Header(props) {
    const { quantity = 0 } = props;

    const { handleBasketShow, showAlert } = useContext(ShopContext);

    return (
        <nav className="bg-white flex justify-between sticky top-0 shadow-xl z-20">
            <div className="p-4">
                <span className="text-gray-700 text-3xl">React Shop</span>
            </div>

            <div
                className="cursor-pointer rounded-lg flex justify-center self-center p-4 text-gray-700 hover:text-blue-700 transition-all"
                onClick={handleBasketShow}
            >
                <CSSTransition
                    in={showAlert}
                    unmountOnExit
                    timeout={300}
                    classNames="alert"
                >
                    <Alert />
                </CSSTransition>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-9 h-9 mr-2 "
                >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                {quantity ? (
                    <span className="text-base -ml-4 mt-2 bg-blue-600 rounded-full w-7 h-7 text-white text-center mr-4 border-2 border-white">
                        {quantity}
                    </span>
                ) : null}
            </div>
        </nav>
    );
}

export default Header;
