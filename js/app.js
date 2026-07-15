// ======================================
// APP.JS
// ======================================

let pacientes = obterPacientes();

const form = document.getElementById("formPaciente");
const tabela = document.getElementById("listaPacientes");

let indiceEdicao = null;

//========================================
// CADASTRAR
//========================================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const paciente = {

        nome: document.getElementById("nome").value.trim(),

        idade: document.getElementById("idade").value,

        prontuario: document.getElementById("prontuario").value.trim(),

        leito: document.getElementById("leito").value.trim(),

        medico: document.getElementById("medico").value.trim(),

        clinica: document.getElementById("clinica").value.trim(),

        hipotese: document.getElementById("hipotese").value.trim(),

        condutas: document.getElementById("condutas").value.trim(),

        observacoes: document.getElementById("observacoes").value.trim(),

        ultima: document.getElementById("ultima").value,

        intervalo: Number(document.getElementById("intervalo").value),

        historico: []
    };

    if (paciente.nome === "") {
        alert("Informe o nome.");
        return;
    }

    if (paciente.prontuario === "") {
        alert("Informe o prontuário.");
        return;
    }

    if (indiceEdicao === null) {

        pacientes.push(paciente);

    } else {

        paciente.historico = pacientes[indiceEdicao].historico;

        pacientes[indiceEdicao] = paciente;

        indiceEdicao = null;

        form.querySelector("button").textContent = "Salvar Paciente";
    }

    salvarPacientes();

    atualizarTabela();

    atualizarDashboard();

    form.reset();

});
//========================================
// MONTAR TABELA
//========================================

function atualizarTabela(lista = pacientes) {

    tabela.innerHTML = "";

    lista.forEach((paciente, indice) => {

        const tr = document.createElement("tr");

        tr.className = classeStatus(paciente);

        tr.innerHTML = `

<td>${paciente.leito}</td>

<td>${paciente.nome}</td>

<td>${paciente.idade}</td>

<td>${paciente.prontuario}</td>

<td>${paciente.medico}</td>

<td>${calcularProxima(paciente)}</td>

<td>

<strong>

${statusPaciente(paciente)}

</strong>

</td>

<td>

<button onclick="editarPaciente(${indice})">

✏️

</button>

<button onclick="excluirPaciente(${indice})">

🗑️

</button>

</td>

`;

        tabela.appendChild(tr);

    });

}
//========================================
// EXCLUIR
//========================================

function excluirPaciente(indice) {

    if (!confirm("Excluir paciente?")) return;

    pacientes.splice(indice, 1);

    salvarPacientes();

    atualizarTabela();

    atualizarDashboard();

}
//========================================
// EDITAR
//========================================

function editarPaciente(indice) {

    const p = pacientes[indice];

    indiceEdicao = indice;

    nome.value = p.nome;

    idade.value = p.idade;

    prontuario.value = p.prontuario;

    leito.value = p.leito;

    medico.value = p.medico;

    clinica.value = p.clinica;

    hipotese.value = p.hipotese;

    condutas.value = p.condutas;

    observacoes.value = p.observacoes;

    ultima.value = p.ultima;

    intervalo.value = p.intervalo;

    form.querySelector("button").textContent =
        "Atualizar Paciente";

}
//========================================
// PESQUISA
//========================================

const pesquisa =
document.getElementById("pesquisa");

pesquisa.addEventListener("keyup", function () {

    const texto = this.value.toLowerCase();

    const resultado = pacientes.filter(p =>

        p.nome.toLowerCase().includes(texto)

        ||

        p.prontuario.toLowerCase().includes(texto)

        ||

        p.leito.toLowerCase().includes(texto)

        ||

        p.medico.toLowerCase().includes(texto)

        ||

        p.clinica.toLowerCase().includes(texto)

    );

    atualizarTabela(resultado);

});
//========================================
// INICIALIZAÇÃO
//========================================

atualizarTabela();

if (typeof atualizarDashboard === "function") {
    atualizarDashboard();
}