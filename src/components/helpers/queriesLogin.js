const URL = process.env.REACT_APP_API_CODER_USUARIO;

export const consultarUsuario = async () => {

  try {

    const respuesta = await fetch(URL + "/auth/nuevo");

    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuario = async (usuario) => {
  console.log(usuario);
  try {
    const respuesta = await fetch(URL + "/auth/nuevo", {
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
    const respuesta = await fetch(URL + "/auth/nuevo/" + _id, {
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
    const respuesta = await fetch(URL + "/auth", {

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
      permiso: datos.permiso,
      email: datos.email,
      token: datos.token,
      _id: datos._id,
      estado: datos.estado,
      admin: datos.admin
    };
  } catch (error) {
    console.log("errores en el login");
    return;
  }
};




