import Shop from "./components/Shop";
import { ContextProvider } from "./context";

function App() {
    return (
        <ContextProvider>
            <Shop />
        </ContextProvider>
    );
}

export default App;
