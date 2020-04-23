
     const USERSLISTAPI = "https://jsonplaceholder.typicode.com/users"; 
     /*Con Este Link Consumimos esta API cuyos Datos vamos a Representar en Formato Lista por Nombre - email - Direccion - Ciuidad  y Código Postal.*/
     console.log(USERSLISTAPI);
     /*Esto es para poder verificar en la Consola del Navegador que la Información del Link llega Correctamente.*/

     fetch(USERSLISTAPI)
        .then(response => {
            return response.json()
        })/*Esto siempre se tiene que dejar así Por Defecto, Básicamente dice que la Respuesta(response) a la llegada de los Datos a Través del Link de la API va a ser Devolver(Return) la Respuesta(response) en Json para la Página.*/
        .then(data => {
        /* En esta parte va a ir la Respuesta(response) en sí, escrita con Javascript y Jquery.*/

            let userDataList = document.querySelector('#userList');
            /*Con esta Let tomamos la ID del <div> con id='userList' en medio del <body> de HTML para "Ubicar" allí el Código Javascript que tengamos que ejecutar. Document.querySelector() Devuelve el primer elemento
             del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores.*/

            data.map(user =>{
                //for (let user of users) {
                    userDataList.innerHTML +=
                    /*Con el método .map(function) Iteramos por cada Elemento del Objeto Proveído por la API y aplicarle con "userDataList.innerHTML" el HTML y JS que está abajo
                    entre las Comillas Hacia la Izquierda (``) y MUY IMPORTANTE usamos "+=" en vez de solo "=" porque está dentro de un método Loop .map(function) que Itera
                     por cada Objeto, así en vez Iterar por todos los Usuarios y asignarle "userDataList.innerHTML" con "+" SÓLO al último Usuario por el que Itera, con "+=" Itera
                     por cada elemento asignándole "userDataList.innerHTML" PERO LOS CONSERVA Y LES AGREGA EL PRÓXIMO USUARIO EN LA LISTA.*/
                
                     /** Aquí debajo Entre Medio del Código HTML se van a Mostrar los Datos Corespondientes a cada Sección del Objeto Javascript (Ej:_ user.name , user.email , etc) siendo este Código Javascript 
                      * escrito Dentro de Jquery (${...}).*/
                     `  
                    <tr>
                      <th scope="row">${user.name}</th>
                      <td>${user.email}</td>
                      <td>${user.address.street} ${user.address.suite}</td>
                      <td>${user.address.city}</td>
                      <td>${user.address.zipcode}</td>
                    </tr> 
                    `;
                //}
                  /*Con este comando (el ".innerHTML") y usando las Comillas hacia la Izquierda (``) le asignamos a una Variable: Código HTML, CSS y Boostrap 4, para después mostrarlo junto con el
                Código Javascript con el que Interactúa en el <div> (O elemento que sea) con id='userList' en medio del <body> de HTML.*/
            })
                
            console.log(data);
        })
        .catch(err => {
            /*Acá se escribe el Código en Respuesta ante un Posible Error.*/
        })
        