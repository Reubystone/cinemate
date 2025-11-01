import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-darkbg">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
