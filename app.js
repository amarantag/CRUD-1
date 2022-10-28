const nicknameUI = document.querySelector('#inNickname');
const emailUI = document.querySelector('#inEmail');
const passwordUI = document.querySelector('#inPassword');
const btnUI = document.querySelector('#btn');
const tableBodyUI = document.querySelector('#tableBody');
const formularioUI = document.querySelector('#formContainer');

//eventos
btnUI.addEventListener('click', enviar);


//funciones
function enviar (){

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
    }else{
        arreglo.push(objUsuario);
        localStorage.setItem('DB', JSON.stringify(arreglo));
    }

    pintar();

}

function pintar(){
    let datos = JSON.parse(localStorage.getItem('DB'));
    
    tableBodyUI.innerHTML = ''

    datos.forEach(element => {

        tableBodyUI.innerHTML = `
        <tr>
            <td>${element.nickname} </td>
            <td>${element.email} </td>
            <td>${element.password} </td>
            
        </tr>
        `
    });
}
