
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


export const crearProductoAPI = async (producto, token) => {
    // console.log(URL)
    try {
      const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // envio el token en el header personalizado
          "x-token": token,
        },
        body: JSON.stringify(producto),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return false;
    }
  };