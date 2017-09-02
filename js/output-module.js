let outputEl;
//--------------------------------------------------------------------------------
function showResult(res) {
    if (!outputEl) {
        outputEl = document.getElementById('output');
    }
    outputEl.innerText = `Calculated value: ${res}`;
}
//--------------------------------------------------------------------------------
export default {
    showResult
}