const URL = process.env.REACT_APP_API_CODER_USUARIO;

export const consultarUsuario = async () => {
  // console.log(URL)
  try {
    // peticion get para obtener listado de usuarios
    const respuesta = await fetch(URL + "/auth");
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuario = async (usuario) => {
  console.log(usuario);
  try {
    const respuesta = await fetch(URL + "/usuarios/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (e) {
    console.log(e);
  }
};

export const borrarUsuario = async (_id) => {
  try {
    const respuesta = await fetch(URL + "/auth" + _id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};
