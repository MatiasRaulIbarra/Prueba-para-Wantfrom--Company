const formulario = document.querySelector("#formulario");
const btnEnviar = document.querySelector("#btnEnviar")
const btnEnviando = document.querySelector("#btnEnviando")

const toast = document.getElementById("#mensaje")

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = new FormData(formulario)

  console.log("campo Nombre:",datos.get("nameCampo"))
  console.log("campo Teléfono:",datos.get("telCampo"))
  console.log("campo Email:",datos.get("emailCampo"))
  console.log("campo Consulta:",datos.get("consultaCampo"))

  btnEnviar.classList.add("d-none")
  btnEnviando.classList.remove("d-none")

  window.setTimeout(()=>{
    
      btnEnviar.classList.remove("d-none")
      btnEnviando.classList.add("d-none")

      const eventoToast = new bootstrap.Toast(toast)
      eventoToast.show()

  },3000)


  formulario.reset()
});
