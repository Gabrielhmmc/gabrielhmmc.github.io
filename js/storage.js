// ======================================
// STORAGE.JS
// ======================================

const STORAGE_KEY = "controle_ambulatorial_pacientes";

function obterPacientes() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

function salvarPacientes() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(pacientes)
    );
}