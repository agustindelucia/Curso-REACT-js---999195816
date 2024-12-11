import {useForm} from 'react-hook-form'

function App() {

    const { register, handleSubmit, formState: {errors} } = useForm();
    /*Funcion Register: identifica y registra los input del formulario y los guarda*/ 
    /*Funcion HandleSubmit: maneja el invio de los formularios,,  corrovora que esten completos, etc */
    /*Funcion FormState: identifica y da aviso de los errores que cometa el usuario llenando el formulario */
    
    console.log(errors)

    return ( /*este codigo permite ver la info del formulario en la consola*/
        <form onSubmit={handleSubmit((data) => {console.log(data)})}> 

            {/* nombre */}
            <label htmlFor="nombre">Nombre</label>
            <input 
                type="text" 
                {...register("nombre", { /*codigo: valor (nombre) que quiero registrar(funcion)*/
                    required: true
                })} 
            />
            {
                errors.nombre && <span>Campo requerido</span> /* mensaje de alerta que avisa al usuario que no puso el nombre y es obligatorio*/ 
            }

            {/* apellido */}
            <label htmlFor="apellido">Apellido</label>
            <input 
                type="text" 
                {...register("apellido")}  /*codigo: valor (apellido) que quiero registrar(funcion)*/
            />

            {/* email */}
            <label htmlFor="correo">Correo</label>
            <input 
                type="email" 
                {...register("email")}  /*codigo: valor (email) que quiero registrar(funcion)*/
            />

            {/* telefono */}
            <label htmlFor="telefono">Telefono</label>
            <input 
                type="number" 
                {...register("telefono")} /*codigo: valor (telefono) que quiero registrar(funcion)*/ 
            />

            {/* password */}
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                {...register("password")} /*codigo: valor (password) que quiero registrar(funcion)*/
            />

            {/* confirmacion password */}
            <label htmlFor="confirmarpassword">Confirmar Password</label>
            <input 
                type="password" 
                {...register("confirmarpassword")}  /*codigo: valor (confirmacionpassword) que quiero registrar(funcion)*/
            />
            {/* Valor submit: permite el envio del formulario, cargar la pagina */}
            <button type="submit">
                Enviar
            </button>


        </form>
    )
} /* */

export default App