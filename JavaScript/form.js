const form = document.querySelector("#form");
const btnMailto = document.querySelector("#passInfo");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const formulario = new FormData(this);
  console.log(formulario.get("name"));

  btnMailto.setAttribute('href', `malito:mtdrvdeveloper@gmail.com?subject=${formulario.get('name')}${formulario.get('email')}&body=${formulario.get('message')}`)
    btnMailto.click()
}
