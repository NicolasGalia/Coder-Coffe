const URL = process.env.REACT_APP_API_CODER_USER

export const crearUsuarioAPI = async (usuario) => {
  //console.log(URL)
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



