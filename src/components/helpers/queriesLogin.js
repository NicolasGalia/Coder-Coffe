const URL = process.env.REACT_APP_API_CODER_USUARIO;

export const consultarUserApi = async () => {
  // console.log(URL)
  try {
    // peticion get para obtener listado de usuarios
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

export const borrarUsuario = async (id) => {
  try {
    const respuesta = await fetch(URL + "/nuevo/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const obtenerYSuspenderUsuario = async (_id, req) => {
  try{
      
      const respuesta = await fetch(URL+"perfilusuarios/"+_id,{
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(req)
      })
      const userSuspendido = await respuesta.json()
      return userSuspendido
  } catch(e){
      console.log(e)
  }
}

export const obtenerYDarPermisosUser = async (_id, req) => {
  try{
      const respuesta = await fetch(URL+"perfilusuarios/permisos/"+_id,{
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(req)
      })
      const permisoUser = await respuesta.json()
      return permisoUser
  } catch(e){
      console.log(e)
  }
}

export const borrarUsuarioAPI =  async (_id) => {
  try{
      const respuesta = await fetch(URL+"perfilusuarios/"+_id,{
          method: "DELETE"
      })
      return respuesta
  } catch(e){
      console.log(e)
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

