const nicknameUI = document.querySelector('#inNickname');
const emailUI = document.querySelector('#inEmail');
const passwordUI = document.querySelector('#inPassword');
const btnUI = document.querySelector('#btn');
const btnUI2 = document.querySelector('#btn2');
const tableBodyUI = document.querySelector('#tableBody');
const formularioUI = document.querySelector('#formContainer');
let referencia = ''

//eventos
btnUI.addEventListener('click', enviar);
btnUI2.addEventListener('click', actualizar2)
document.addEventListener('DOMContentLoaded', pintar)



//funciones
function enviar (e){
    e.preventDefault()

    let objUsuario = {
        nickname: nicknameUI.value,
        email: emailUI.value,
        password: passwordUI.value,
        id: Date.now(),
    }

    let arreglo = JSON.parse(localStorage.getItem('DB'));

    if(arreglo === null){
        arreglo = [],
        arreglo.push(objUsuario);
        localStorage.setItem('DB', JSON.stringify(arreglo));
    }else {
        arreglo.push(objUsuario);
        localStorage.setItem('DB', JSON.stringify(arreglo));
    }

    pintar();

    formularioUI.reset();
}

function pintar(){
    let datos = JSON.parse(localStorage.getItem('DB'));
    
    tableBodyUI.innerHTML = ''

        datos.forEach(element => {

            tableBodyUI.innerHTML = tableBodyUI.innerHTML + `
        <tr class'tr' key=${element.id} > 
            <td>${element.nickname} </td>
            <td>${element.email} </td>
            <td>${element.password} </td>
            <td><button onclick='eliminar(event)'>eliminar</button><button onclick= 'actualizar(event)'>actualizar</button></td>
            <td style='display:none'>${element.id}</td>
        </tr>
        `

    })
};

function eliminar(e){
    //console.log(e.path[2].childNodes[9])
    //console.log(e.path[2].getAttribute('key'))
    let buscarElemento = (e.path[2].getAttribute('key'))

    let datos = JSON.parse(localStorage.getItem('DB'));
    let index = datos.findIndex(element => element.id == buscarElemento)
    
    datos.splice(index, 1)

    localStorage.setItem('DB', JSON.stringify(datos));

    pintar();

    formularioUI.reset();

}

function actualizar(e){
    e.preventDefault()
    let buscarElemento = (e.path[2].getAttribute('key'))
    let datos = JSON.parse(localStorage.getItem('DB'));
    let index = datos.findIndex(element => element.id == buscarElemento)

    nicknameUI.value = datos[index].nickname
    emailUI.value = datos[index].email
    passwordUI.value = datos[index].password

    btnUI.style.display = 'none'
    btnUI2.style.display = 'block'

}

function actualizar2(){

}
