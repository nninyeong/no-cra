const App = () => {
  const menu = "불닭크림파스타";
  return (
    <>
      <h1>드디어 성공했다</h1>
      <div>저녁은 {menu} </div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
