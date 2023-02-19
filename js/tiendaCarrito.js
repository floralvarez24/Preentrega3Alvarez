
 class Carrito{
    //Añadir el producto al carrito
    comprarProducto(e){
        e.preventDefault();
        if (e.target.classList.contains('comprar')){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto (producto);
        }
        }

        leerDatosProducto(producto){
            const infoProducto ={
                imagen : producto.querySelector('img').src,
                titulo : producto. querySelector('h1').textContent,
                precio : producto.querySelector('h3').textContent,
                id : producto.querySelector('a').getAttribute('data-id'),
                cantidad : 1

            }
            let productosLS;
            productosLS= this.obtenerProductosLocalStorage();
            productosLS.forEach(function(productoLS){
               if (productoLS.id === infoProducto.id){
                productosLS=productoLS.id;
               }
            });
            if (productosLS == infoProducto.id){
                Swal.fire({
                    type: 'info',
                    title:'Oops...',
                    text: 'El producto ya está agregado',
                    timer: 1000,
                    showConfirmButton: false
                })
             
            }
            else {
                this. insertarCarrito(infoProducto);
            }    
        }
        // Al hacer click en el icono de carrito muestra la tabla creada en este método
        insertarCarrito(producto){
            const row= document.createElement('tr');
            row.innerHTML= `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href='#' class= "borrar-producto fas fa-times-circle" data-id='${producto.id}'></a>
            </td>
             `;
             listaProductos.appendChild(row);
             //guardo en el localstorage
             this.guardarProductosLocalStorage(producto);
        }
        //Elimina producto al hacer click en el icono cruz
        eliminarProducto(e){
            e.preventDefault();
            let producto, productoId;
            if (e.target.classList.contains('borrar-producto')){
                e.target.parentElement.parentElement.remove();
                producto=e.target.parentElement.parentElement;
                productoId=producto.querySelector('a').getAttribute('data-id');
            }
            // elimino del localstorage
            this.eliminarProductoLocalStorage(productoId);
        }
        // vaciar todo el carrito
        vaciarCarrito(e){
            e.preventDefault();
            while(listaProductos.firstChild){
                listaProductos.removeChild(listaProductos.firstChild);
            }
            // vacio el localstorage
            this.vaciarLocalStorage();
            return false
        }

        //Guardo en el localstorage
        guardarProductosLocalStorage(producto){
            let productos;
            productos= this.obtenerProductosLocalStorage()
            productos.push(producto);
            localStorage.setItem('productos',JSON.stringify(productos));
        }
        obtenerProductosLocalStorage(){
            let productoLS;
            if (localStorage.getItem('productos')== null){
                productoLS=[];
            }
            else{
                productoLS=JSON.parse(localStorage.getItem('productos'));
            }
            return productoLS;
        }

        //Elimino del localstorage
        eliminarProductoLocalStorage(productoId){
            let productosLS;
            productosLS=this.obtenerProductosLocalStorage();
            productosLS.forEach(function (productoLS, index){
                if (productoLS.id ==productoId){
                    productosLS.splice(index, 1);
                }
            });
            localStorage.setItem('productos', JSON.stringify(productosLS));
        }

        // leer productos del localstorage al cargar la pagina para que sigan apareciendo en el carrito
        leerLocalStorage(){
            let productoLS;
            productoLS= this.obtenerProductosLocalStorage();
            productoLS.forEach(function(producto){
                const row= document.createElement('tr');
                row.innerHTML= `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <a href='#' class= "borrar-producto fas fa-times-circle" data-id='${producto.id}'></a>
                </td>
                 `;
                 listaProductos.appendChild(row);   
            });
        }

        // vaciar localstorage
        vaciarLocalStorage(){
            localStorage.clear();
        }


 }


