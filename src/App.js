import { useState, useEffect } from "react";

function App() {
  return (
    <div className="h-screen font-mono text-slate-200 text-center bg-gradient-to-br from-slate-800 to-gray-600">
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <header className="p-4">
      <h1 className="font-bold text-4xl">
        Crypto Stats
      </h1>
      <Search />
    </header>
  );
}

function Search() {
  return (
    <form>
      <input className="border-black  bg-gradient-to-br from-slate-600 to-gray-600 p-2 border-3 rounded-md my-5" type="text" placeholder="&#xf002; Search.." name="search" />
    </form>
  );
}

function Main() {
  return (
    <main className="bg-slate-400 bg-blend-darken bg-opacity-50 w-10/12 h-3/5 mx-auto rounded-md">
      <GetData />
    </main>
  );
}

function GetData() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => response.json())
      .then((coins) => setData(coins[3].item));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.symbol}</td>
            <td>{data.price_btc}</td>
          </tr>
      
      </tbody>
    </table>
  );
}

export default App;
