const iniciarSesion= document.getElementById('boton')
const inicio= document.getElementById('usuario')

iniciarSesion.addEventListener('click', ()=> {
fetch('https://fakestoreapi.com/users/1')
        .then((data) => {
           return data.json();
        })
        .then((res) =>{
        console.log(res);
        inicio.innerHTML =`
        <div class="container">
            <div class="row mt-3">
                <div class="col">
                    <h2 class="d-flex justify-content-center mb-3">Iniciar Sesión</h2>
                    <form id="procesar-pago" action="#">
                        <div class="form-group row">
                            <label for="cliente" class="col-12 col-md-2 col-form-label h2">Nombre de usuario: </label>
                            <div class="col-12 col-md-10">
                                <input type="text" class="form-control" id="cliente" placeholder="${res.username}" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-12 col-md-2 col-form-label h2">Email:</label>
                            <div class="col-12 col-md-10">
                                <input type="password" class="form-control" id="correo" placeholder="${res.email}" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-12 col-md-2 col-form-label h2">Contraseña:</label>
                            <div class="col-12 col-md-10">
                                <input type="password" class="form-control" id="correo" placeholder="" required>
                            </div>
                        </div>
                        <div class="row justify-content-between">
                        <div class="col-md-4 mb-2">
                            <a href="index.html" class="btn btn-info btn-block">Seguir comprando</a>
                        </div>
                        <div class="col-xs-12 col-md-4">
                            <a href="" class="btn btn-dark btn-block" id="procesar-compra">Realizar compra</a>
                        </div>
                        <div class="col-xs-12 col-md-4">
                            <a href="" class="btn btn-success btn-block" id="procesar-compra">Registrarse</a>
                        </div>
                    </div>
                       
                           
                        </div>
                    </form>


                </div>


            </div>
        `
           
        })
        .catch ((error)=> {
           console.log(error);
        })

    })