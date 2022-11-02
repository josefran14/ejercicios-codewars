// Complete la función que acepta una cadena válida y devuelve un número entero.

// ¡Espera, eso sería demasiado fácil! Cada carácter de la cadena debe convertirse
// al valor hexadecimal de su código ascii, luego el resultado debe ser la suma de los números
// en las cadenas hexadecimales (ignore las letras).

const hex = (code) => {
  let resultado = [];
  for (let i = 0; i < code.length; i++) {
    resultado.push(Number(code.charCodeAt(i)).toString(16));
  }

  return resultado.join("").replace(/[a-z]/gi, "").split("").map(Number).reduce((prev, act) => prev + act, 0);
};

console.log(hex("kcxnjsklsHskjHDkl7878hHJk"));

//code.split("").map((c) => c.charCodeAt().toString(16)).join("").replace(/[^\d]/g, "").split("").reduce((acc, x) => acc + Number(x), 0);
