const URL = process.env.REACT_APP_API_CODER_PEDIDO


export const consultarPedido = async () => {
    try {
      const respuesta = await fetch(URL + "/pedido");
      const pedido = await respuesta.json();
      return pedido;
    } catch (error) {
      console.log(error);
    }
  };



  export const editarPedidoBD = async(id, pedido)=>{

    try {
        const respuesta = await fetch(URL+"/"+id,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pedido)
        });
        return respuesta;
    } catch (error) {
      
        return false;
    }
  }



  export const enviarPedido = async (pedido,id) => {
    console.log(pedido);
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
    }
  
  };