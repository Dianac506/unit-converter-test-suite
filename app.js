
// Unit Converter - User Interface Controller
// CMPS 570 - Software Architecture

import { convert, getUnits } from "./converter.js";

const categorySelect = document.getElementById("category");
const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const resultOutput = document.getElementById("result");
const errorMessage = document.getElementById("error");

// Populate available units for the selected category
function updateUnits() {
    const category = categorySelect.value;
    const availableUnits = getUnits(category);

    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    availableUnits.forEach(unit => {
        fromSelect.add(new Option(unit, unit));
        toSelect.add(new Option(unit, unit));
    });

    fromSelect.selectedIndex = 0;
    toSelect.selectedIndex = 1;

    calculateConversion();
}

// Calculate and display the conversion result
function calculateConversion() {
    errorMessage.textContent = "";

    if (amountInput.value.trim() === "") {
        resultOutput.textContent = "--";
        return;
    }

    const amount = Number(amountInput.value);
    const category = categorySelect.value;
    const from = fromSelect.value;
    const to = toSelect.value;

    try {
        const result = convert(amount, category, from, to);

        const formattedResult = Number(
            result.toPrecision(12)
        ).toString();

        resultOutput.textContent =
            `${formattedResult} ${to}`;

    } catch (error) {
        resultOutput.textContent = "--";
        errorMessage.textContent = error.message;
    }
}

// Update results automatically when inputs change
categorySelect.addEventListener("change", updateUnits);
amountInput.addEventListener("input", calculateConversion);
fromSelect.addEventListener("change", calculateConversion);
toSelect.addEventListener("change", calculateConversion);

// Initialize the application
updateUnits();
