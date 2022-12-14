

const RutasAdmin = () => {
    return (
      <>
      <Routes>
      <Route exact path='/administrador' element={<Administrador/>}></Route>
<Route exact path='/CrearProducto' element={<CrearProducto/>}></Route>
<Route exact path='/Administrador/EditarProducto/:id' element={<EditarProducto/>}></Route>
      </Routes>
      </>
    );
};

export default RutasAdmin;