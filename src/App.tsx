import Header from "./components/Header";
import Tests from "./components/Tests";

function App() {
  return (
    <div className="container lg m-auto">
        <Header />
        <div className="flex items-center justify-center text-5xl p-10">
            Главная страница
        </div>
        <Tests />
    </div>
  )
}

export default App
