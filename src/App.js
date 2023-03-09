import { useState, useEffect } from "react";
import Header from "./header";

function App() {
  return (
    <div className="h-screen w-screen overflow-scroll font-mono text-slate-200 text-center bg-gradient-to-br from-slate-800 to-gray-600">
      <Header heading="Crypto Stats" />
      <Main />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="my-4 bottom-0">
      <p>Copyright &copy; Vimal</p>
    </footer>
  );
}

function Main() {
  return (
    <main className="bg-slate-400 bg-blend-darken bg-opacity-50 w-10/12 h-3/5 mx-auto rounded-md overflow-scroll">
      <GetData />
    </main>
  );
}

function GetData() {
  const [reload, setReload] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => response.json())
      .then(({ coins }) => {
        const Coins = coins.map((coin) => coin.item);
        setData(Coins);
      });
  }, [reload]);

  return (
    <>
      <button onClick={() => setReload(reload + 1)}>Refresh {reload}</button>

      <table className="mx-auto text-lime-500 border-collapse">
        <thead>
          <tr>
            <th className="">Image</th>
            <th className="border border-green-600">Name</th>
            <th className="border border-green-600">Symbol</th>
            <th className="border border-green-600">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <tr>
              <td>
                <img src={coin.large} alt="" className="w-10" />
              </td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>{coin.price_btc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
