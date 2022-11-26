const URL = process.env.REACT_APP_API_CODER_PEDIDO;

export const consultarPedidoUsuario = async () => {
    // console.log(URL)
    try {
      const respuesta = await fetch(URL);
      const listaPedido = await respuesta.json();
      return listaPedido;
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

  export const limpiarPedido = async(usuario)=>{
    try {
        const respuesta = await fetch(URL+'/'+usuario,{
            method: "DELETE"          
        });
        return respuesta;
        
    } catch (error) {
        console.log(error);
        return false;
    }
  }
  
  export const eliminarProductoPedido = async(usuario, pedido)=>{

    try {
        const respuesta = await fetch(URL+'/'+usuario,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pedido)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
  }




