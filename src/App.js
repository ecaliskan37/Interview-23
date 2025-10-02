import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const handle = () => {
    setCount(p => p + 1)
  }

  const handleSubmit = (obj) => {
    alert(`Modal derecelendirme: ${obj.rating}`);
  }
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <FeedbackWrapper
        onSubmit={handleSubmit}
      >
        {
          count >= 3 ? (
            <Window set={setCount} handle={handleSubmit} />
          )
            : (
              <div style={{ width: "150px" }}>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  <button onClick={handle}>Bir button</button>
                  <button onClick={handle}>Başka bir button</button>
                </div>
                <button onClick={handle} style={{ padding: 20, margin: 0 }}>Büyük bir button</button>
              </div>
            )
        }
      </FeedbackWrapper >
    </div >
  );
}

const FeedbackWrapper = ({ onSubmit, children }) => {
  return (
    <>
      {children}
    </>)
};


const Window = ({ set, handle }) => {
  const [value, setValue] = useState(3)
  console.log(value)
  return (
    <div style={{ backgroundColor: "yellow", border: "2px" }}>
      <input type="range" min="1" max="5" value={value}
        onChange={(e) => setValue(e.target.value)}
        className="slider" id="myRange" />
      <button type="submit" onClick={() => handle({
        rating: value == 1 ? "Memnun değil" : value == 2 ? "Biraz memnun" : value == 3 ? "Memnun" : value == 4 ?
          "Çok memnun" : "Son derece memnun"
      })}>Gönder</button>
    </div >)
};


export default App;
