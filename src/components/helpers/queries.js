const URL = process.env.REACT_APP_API_CODER;

export const consultarAPI = async () => {
  // console.log(URL)
  try {
    const respuesta = await fetch(URL + '/cafe');
  
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
    const respuesta = await fetch(URL + '/cafe', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // "x-token": //poner el token del usuario que se registro
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
      const respuesta = await fetch(URL+'/cafe/'+id);
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
      const respuesta = await fetch(URL+'/cafe/'+id,{
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
      const respuesta = await fetch(URL+'/cafe/'+id,{
          method: "PUT",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(producto)
      });
      return respuesta;
  } catch (error) {
    
      return false;
  }
}