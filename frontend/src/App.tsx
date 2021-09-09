import DataTable from "components/DataTable";
import Footer from "components/Footer";
import Navbar from "components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-primary">Olá Mundo!</h2>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
