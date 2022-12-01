const URL = process.env.REACT_APP_API_CODER_PEDIDO;

export const consultarPedidoUsuario = async (idUsuario) => {
  try {
    const respuesta = await fetch(URL + "/" + idUsuario);
    const producto = {
      producto: await respuesta.json(),
      status: respuesta.status,
    };
    return producto;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const crearPedido = async (pedido) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// export const limpiarPedido = async(usuario)=>{
//   try {
//       const respuesta = await fetch(URL+'/'+usuario,{
//           method: "DELETE"
//       });
//       return respuesta;

//   } catch (error) {
//       console.log(error);
//       return false;
//   }
// }

export const actualizarPedidoUsuario = async (idUsuario, usuario) => {
  try {
    const respuesta = await fetch(URL + "/" + idUsuario, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const agregarProductoPedido = (producto) => {
  const listaProductosLocal =
    JSON.parse(localStorage.getItem("listaProductos")) || [];
    localStorage.setItem("listaProductos", JSON.stringify(...listaProductosLocal, producto));
  
};

agregarProductoPedido({nombreProducto: producto.nombre, precio: producto.precio})