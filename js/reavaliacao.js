// ========================================
// REAVALIAÇÃO
// ========================================

// Retorna a data da próxima reavaliação
function obterProximaReavaliacao(paciente) {

    if (!paciente.ultima)
        return null;

    const ultima = new Date(paciente.ultima);

    return new Date(
        ultima.getTime() +
        paciente.intervalo * 60 * 60 * 1000
    );

}


// Formata data para DD/MM HH:MM
function formatarData(data){

    if(!data)
        return "-";

    return data.toLocaleString("pt-BR",{
        day:"2-digit",
        month:"2-digit",
        hour:"2-digit",
        minute:"2-digit"
    });

}


// Texto exibido na tabela
function calcularProxima(paciente){

    const data = obterProximaReavaliacao(paciente);

    if(!data)
        return "-";

    return formatarData(data);

}


// Diferença em minutos
function minutosRestantes(paciente){

    const proxima = obterProximaReavaliacao(paciente);

    if(!proxima)
        return null;

    return Math.floor(
        (proxima - new Date()) / 60000
    );

}


// Status do paciente
function statusPaciente(paciente){

    const minutos = minutosRestantes(paciente);

    if(minutos === null)
        return "⚪ Sem avaliação";

    if(minutos < 0){

        return "🔴 ATRASADO";

    }

    if(minutos <= 60){

        return "🟡 " + minutos + " min";

    }

    return "🟢 Em dia";

}
// Cor da linha

function classeStatus(paciente){

    const minutos = minutosRestantes(paciente);

    if(minutos === null)
        return "";

    if(minutos < 0)
        return "atrasado";

    if(minutos <=60)
        return "proximo";

    return "emdia";

}


// Atualiza automaticamente

setInterval(function(){

    if(typeof atualizarTabela==="function"){

        atualizarTabela();

    }

    if(typeof atualizarDashboard==="function"){

        atualizarDashboard();

    }

},60000);