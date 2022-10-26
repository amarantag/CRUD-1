let listaUsuarios = [];

const objUsuario = {
    nickname: '',
    email: '',
    password: '',
}

let update = false;

const formulario = document.querySelector ('#formContainer');
const nicknameInput = document.querySelector('#inNickName');
const emailInput = document.querySelector('#inEmail');
const passwordInput = document.querySelector('inPassword');
const btnAddUpdtae = document.querySelector('#btnAddUpdate');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nicknameInput.value === '' || nicknameInput.value === '' || emailInput.value === '') {
        alert ('Debes llenar todos los campos');
        return;
    }

    agregarUsuario();
}

function agregarUsuario(){
    listaUsuarios.push({...objUsuario});

    mostrarUsuarios();
}

function mostrarUsuarios() {
    const table = document.querySelector('#dashboard');

    listaUsuarios.forEach( u => {
        const {nickname, email, password} = usuario;

        const
    })
};