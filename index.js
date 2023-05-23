function encryptText() {
    const inputField = document.getElementById("inputField");
    const outputField = document.getElementById("outputField");
    const substitution = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    };

    outputField.value = inputField.value.replaceAll(/a|e|i|o|u/g, value => substitution[value]);
    visibility(outputField.value);
}

function decryptText() {
    const inputField = document.getElementById("inputField");
    const outputField = document.getElementById("outputField");

    const substitution = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
    };

    outputField.value = inputField.value.replaceAll(/ai|enter|imes|ober|ufat/g, value => substitution[value]);
    visibility(outputField.value);
}

function copyText() {
    const outputField = document.getElementById("outputField");
    navigator.clipboard.writeText(outputField.value);
}

function visibility(outputField) {
    if (outputField !== "") {
        document.getElementById("text").style.display = "none";
        document.getElementById("picture").style.display = "none";
        document.getElementById("btn-copy").style.display = "block";
    } else {
        document.getElementById("text").style.display = "flex";
        document.getElementById("picture").style.display = "flex";
        document.getElementById("btn-copy").style.display = "none";
    }
}
