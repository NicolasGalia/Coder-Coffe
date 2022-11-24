const URL = process.env.REACT_APP_API_CODER_USUARIO;
export const consultarUsuario = async() => {
  // console.log(URL)
  try {
    // peticion get para obtener listado de usuarios
    const respuesta = await fetch(URL);
    const listaUsuarios = await respuesta.json()
    return listaUsuarios; 
  } catch (error) {
    console.log(error)
  }
}


