function InputRH(value) {
  document.getElementById('inputRH').value += value;
}
function Reset() {
  document.getElementById('inputRH').value = '';
}
function Hitung() {
  let inputRH = eval(document.getElementById('inputRH').value);
  document.getElementById('inputRH').value = inputRH;
}
