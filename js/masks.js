/* Este script aplica máscaras dinâmicas aos campos do formulário
   enquanto o usuário digita.
*/

document.addEventListener('DOMContentLoaded', () => {
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    if (inputCPF) {
        inputCPF.addEventListener('input', formatCPF);
    }
    if (inputTelefone) {
        inputTelefone.addEventListener('input', formatTelefone);
    }
    if (inputCEP) {
        inputCEP.addEventListener('input', formatCEP);
    }
});

function formatCPF(e) {
    let value = e.target.value;
    // Remove tudo que não for dígito
    value = value.replace(/\D/g, '');
    
    // Aplica a máscara 000.000.000-00
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    
    // Limita o tamanho
    e.target.value = value.substring(0, 14);
}

function formatTelefone(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    
    // Aplica a máscara (00) 90000-0000
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
    
    e.target.value = value.substring(0, 15);
}

function formatCEP(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    
    // Aplica a máscara 00000-000
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    
    e.target.value = value.substring(0, 9);
}
