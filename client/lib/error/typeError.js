// π typeError.js
export function typeError(message) {
  throw new TypeError(message);
}

function refError(message) {
  throw new ReferenceError(message);
}

//* μ νμ€μλ¬λ μ μ²΄μ μΈ λμμ΄ λ©μΆλ€. μμ ν΄λ μ§νμ΄ μλ¨.
function syntaxError(message) {
  throw new SyntaxError(message);
}

// π typeError.js
export function typeError(message) {
  throw new TypeError(message);
}
