import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { editarProductoAPI, obtenerProductoAPI } from "../../components/helpers/queries";

const EditarProducto = () => {
  const {register, handleSubmit, formState:{errors}, setValue} = useForm();
  const {id} = useParams();
  const navegacion = useNavigate();

  useEffect(()=>{
    obtenerProductoAPI(id).then((respuesta)=>{
      if(respuesta.status === 200){
        setValue('nombreProducto', respuesta.dato.nombreProducto);
        setValue('precio', respuesta.dato.precio);
        setValue('imagen', respuesta.dato.imagen);
        setValue('categoria', respuesta.dato.categoria);
      }
    })
  },[])
  
  const onSubmit = (datos)=>{
    editarProductoAPI(id,datos).then((respuesta)=>{
      if(respuesta.status===200){
        Swal.fire('Producto editado','El producto fue correctamente actualizado','success');
        navegacion('/administrador');
      }else{
        Swal.fire('Editar el producto','Usted debe modificar el producto','error');
      }
    })
  }

  return (
    <section className="container mainSection boxAdmin p-2 my-5">
        <div className="d-flex justify-content-between align-items-center mt-5 ps-3 pe-3">
      <h1 className="display-4 tituloAdmin">Editar producto</h1>
      <Link to="/Administrador" className="btn btnAgregar">
          Volver a Admin
        </Link>
        </div>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Ej: Cafe"
          minLength={2}
          maxLength={50}
          {...register('nombreProducto', {
            required:'El nombre del producto es obligatorio',
            minLength:{
              value:2,
              message: 'La cantidad de caracteres es 2 como minimo'
            },
            maxLength:{
              value:100,
              message:'La cantidad maxima de caracteres es de 100'
            }
          })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 50" 
          {...register('precio',{
            	required:'El precio del producto es un dato obligatorio',
              min:{
                value:1,
                message: 'El precio minimo debe ser de $1'
              },
              max:{
                value:10000,
                message: 'El precio maximo debe ser de $10000'
              }
          })
          } />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register('imagen',{
              required: 'La url de la imagen es obligatoria',
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: 'Debe ingresar una URL valida'
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select {
            ...register('categoria',{
              required:'Debe seleccionar una categoria'
            })
          }>
            <option value="">Seleccione una opcion</option>
            <option value="bebidas">Bebidas</option>
            <option value="Almuerzos/Cenas">Almuerzos/Cenas</option>
            <option value="Desayunos/Meriendas">Desayunos/Meriendas</option>
            <option value="Postres">Postres</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;
