
import Notebooks from "./Components/Notebooks/Notebooks";
import Header from "./Components/Header/Header";
import './App.css'

const App = () => {
    return (
        <div>
            <Header/>

            <main className={'notes'}>
                <Notebooks/>
            </main>

        </div>
    )
}
export default App;
