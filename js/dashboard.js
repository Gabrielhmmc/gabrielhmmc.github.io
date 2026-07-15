// ========================================
// DASHBOARD
// ========================================

function atualizarDashboard(){

    document.getElementById("totalPacientes").textContent =
        pacientes.length;

    let emDia = 0;

    let proximos = 0;

    let atrasados = 0;

    pacientes.forEach(p=>{

        const minutos = minutosRestantes(p);

        if(minutos === null){

            emDia++;

            return;

        }

        if(minutos < 0){

            atrasados++;

            return;

        }

        if(minutos <=60){

            proximos++;

            return;

        }

        emDia++;

    });

    document.getElementById("emdia").textContent =
        emDia;

    document.getElementById("proximos").textContent =
        proximos;

    document.getElementById("atrasados").textContent =
        atrasados;

}