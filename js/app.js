function fahrenheit() {
  const celsius = parseFloat(document.getElementById("dato").value);
  if (!isNaN(celsius)) {
    //si no está vacío
    const fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById("resultado").innerText = `${fahrenheit.toFixed(
      2
    )}°F`; //.toFixed para redondear el resultado
  } else {
    document.getElementById("resultado").innerText =
      "Por favor, ingrese un número válido";
  }
}

function kelvin() {
  const celsius = parseFloat(document.getElementById("dato").value);
  if (!isNaN(celsius)) {
    const kelvin = celsius + 273.15;
    document.getElementById("resultado").innerText = `${kelvin.toFixed(2)}°K`;
  } else {
    document.getElementById("resultado").innerText =
      "Por favor, ingrese un número válido";
  }
}
