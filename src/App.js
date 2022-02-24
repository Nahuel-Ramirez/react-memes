import html2canvas from "html2canvas";
import { useState } from "react";
import "./App.css";

function App() {
  //Estados
  const [linea1, setlinea1] = useState("");
  const [linea2, setlinea2] = useState("");
  const [meme, setMeme] = useState("");

  //Funciones para cambiar las lineas de texto
  const onChangeLinea1 = function (event) {
    setlinea1(event.target.value);
  };
  const onChangeLinea2 = function (event) {
    setlinea2(event.target.value);
  };

  //Funcion para que me muestre el meme
  const onChangeMeme = function (event) {
    setMeme(event.target.value);
  };
  const onClickExport = function (event) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <h1>Elija la imagen del meme</h1>
      <select onChange={onChangeMeme}>
        <option value="JhonyBravo">Jhony Bravo</option>
        <option value="krusty">Krusty</option>
        <option value="losSimpsons">Los Simpsons</option>
        <option value="neneLlorando">Niño Llorando</option>
        <option value="patoDonald">Pato Donald</option>
        <option value="villano">Villano</option>
      </select>{" "}
      <br />
      <input
        onChange={onChangeLinea1}
        type="text"
        placeholder="Texto de arriba"
      />{" "}
      <br />
      <input
        onChange={onChangeLinea2}
        type="text"
        placeholder="Texto de abajo"
      />{" "}
      <br />
      <button onClick={onClickExport}>Exportar</button>
      <div className="meme" id="meme">
        <span className="linea1">{linea1}</span> <br />
        <span className="linea2">{linea2}</span>
        <img alt="" src={`/imgMemes/${meme}.jpg`} />
      </div>
    </div>
  );
}

export default App;
