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

    const respuesta = await fetch(URL + "/nuevo", {

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
    const respuesta = await fetch(URL + "/nuevo" + _id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const login = async (usuario) => {
  try {
    console.log(usuario);
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      nombre: datos.nombre,
      token: datos.token,
      uid: datos.uid,
    };
  } catch (error) {
    console.log("errores en el login");
    return;
  }
};