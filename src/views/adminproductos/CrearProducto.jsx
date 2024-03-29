import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI } from "../../components/helpers/queries";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    crearProductoAPI(datos).then((respuesta) => {
      
      if (respuesta.status === 201) {
        Swal.fire(
          "Producto creado",
          "El producto fue creado exitosamente",
          "success"
        );
        reset();

        navegacion("/Administrador");
      } else {
        Swal.fire(
          "Ocurrio un error",
          "El producto no pudo ser creado",
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection my-5 boxCrear ">
      <h1 className="display-5 mt-5 tituloAdmin text-center">Nuevo producto</h1>
      <hr />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 fw-bold" controlId="formNombreProdcuto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            minLength={2}
            maxLength={50}
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad de caracteres es 2 como minimo",
              },
              maxLength: {
                value: 100,
                message: "La cantidad maxima de caracteres es de 100",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio del producto es un dato obligatorio",
              min: {
                value: 1,
                message: "El precio minimo debe ser de $1",
              },
              max: {
                value: 10000,
                message: "El precio maximo debe ser de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL valida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
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
        <div className="text-center my-4 pb-2">
        <Button className="btnGuardar" type="submit">
          Guardar Producto
        </Button>

        </div>
      </Form>
    </section>
  );
};

export default CrearProducto;
