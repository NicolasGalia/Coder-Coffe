const URL = process.env.REACT_APP_API_USUARIO;


export const consultarUsuario = async () => {
    try {
      const respuesta = await fetch(URL);
      const listaUsuarios = await respuesta.json();
      return listaUsuarios;
      
    } catch (e) {
      console.log(e);
    }
  };

export const crearUsuario = async (usuario) => {
    console.log(URL)
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


export const borrarUsuario = async(id)=>{
  try {
      const respuesta = await fetch(URL+'/'+id,{
          method: "DELETE"          
      });
      return respuesta;
      
  } catch (error) {
      console.log(error);
      return false;
  }
}