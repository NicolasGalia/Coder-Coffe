const URL = process.env.REACT_APP_API_CODER_PEDIDO


export const consultarPedidoTodos = async () => {

  try {

    const respuesta = await fetch(URL);

    const listaPedido = await respuesta.json();
    return listaPedido;
  } catch (error) {
    console.log(error);
  }
};



  export const editarPedidoBD = async(id, pedido)=>{
console.log(id)
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



  export const enviarPedido = async (pedido) => {
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

  export const consultarTodosPedido = async () => {
  
    try {
      const respuesta = await fetch(URL + '/productos/cafe');
    
      const listaProductos = await respuesta.json();
      return listaProductos;
    } catch (error) {
      console.log(error);
      return false;
    }
  };