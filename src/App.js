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
    <main>Main</main>
  );
}

export default App;
