const URL = process.env.REACT_APP_API_CODER;

export const consultarAPI = async () => {
  // console.log(URL)
  try {
    const respuesta = await fetch(URL);
  
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const crearProductoAPI = async (producto) => {
  // console.log(URL)
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // envio el token en el header personalizado
        // "x-token": token,
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const obtenerProductoAPI = async(id)=>{
  try {
      const respuesta = await fetch(URL+'/'+id);
      const producto={
          dato: await respuesta.json(),
          status: respuesta.status
      }
      return producto;
  } catch (error) {
      console.log(error);
      return false;
  }
}

export const borrarProductoAPI = async(id)=>{
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

export const editarProductoAPI = async(id, producto)=>{

  try {
      const respuesta = await fetch(URL+'/'+id,{
          method: "PUT",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(producto)
      });
      return respuesta;
  } catch (error) {
      console.log(error);
      return false;
  }
}