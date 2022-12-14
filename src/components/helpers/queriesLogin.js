const URL = process.env.REACT_APP_API_CODER_USUARIO;

export const consultarUsuario = async () => {

  try {
 
    const respuesta = await fetch(URL + "/nuevo");
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

export const borrarUsuarioAPI = async (_id) => {
  try {
    const respuesta = await fetch(URL + "/" + _id, {
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
      nombre: datos.nombre,
      apellido: datos.apellido,
      email: datos.email,
      token: datos.token,
      _id: datos._id,
    };
  } catch (error) {
    console.log("errores en el login");
    return;
  }
};




