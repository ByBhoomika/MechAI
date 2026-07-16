const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");
const calculatorType = document.getElementById("calculatorType");

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");

const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");

const unit1 = document.getElementById("unit1");
const unit2 = document.getElementById("unit2");

const result = document.getElementById("result");

if (calculatorType) {
    calculatorType.addEventListener("change", updateInputs);
    updateInputs();
}

if (calculateBtn) {
    calculateBtn.addEventListener("click", calculate);
}

if (clearBtn) {
    clearBtn.addEventListener("click", clearCalculator);
}

function updateInputs() {

    switch (calculatorType.value) {

        case "stress":

            label1.innerText = "Force";
            label2.innerText = "Area";

            value1.placeholder = "Enter Force";
            value2.placeholder = "Enter Area";

            unit1.innerHTML = `
                <option value="N">N</option>
                <option value="kN">kN</option>
            `;

            unit2.innerHTML = `
                <option value="m2">m²</option>
                <option value="cm2">cm²</option>
                <option value="mm2">mm²</option>
            `;
            break;

        case "strain":

            label1.innerText = "Change in Length";
            label2.innerText = "Original Length";

            value1.placeholder = "Enter Change in Length";
            value2.placeholder = "Enter Original Length";

            unit1.innerHTML = `
                <option value="m">m</option>
                <option value="cm">cm</option>
                <option value="mm">mm</option>
            `;

            unit2.innerHTML = `
                <option value="m">m</option>
                <option value="cm">cm</option>
                <option value="mm">mm</option>
            `;
            break;

        case "pressure":

            label1.innerText = "Force";
            label2.innerText = "Area";

            value1.placeholder = "Enter Force";
            value2.placeholder = "Enter Area";

            unit1.innerHTML = `
                <option value="N">N</option>
                <option value="kN">kN</option>
            `;

            unit2.innerHTML = `
                <option value="m2">m²</option>
                <option value="cm2">cm²</option>
                <option value="mm2">mm²</option>
            `;
            break;

        case "torque":

            label1.innerText = "Force";
            label2.innerText = "Radius";

            value1.placeholder = "Enter Force";
            value2.placeholder = "Enter Radius";

            unit1.innerHTML = `
                <option value="N">N</option>
                <option value="kN">kN</option>
            `;

            unit2.innerHTML = `
                <option value="m">m</option>
                <option value="cm">cm</option>
                <option value="mm">mm</option>
            `;
            break;

        case "power":

            label1.innerText = "Torque";
            label2.innerText = "RPM";

            value1.placeholder = "Enter Torque";
            value2.placeholder = "Enter RPM";

            unit1.innerHTML = `
                <option value="Nm">N·m</option>
                <option value="kNm">kN·m</option>
            `;

            unit2.innerHTML = `
                <option value="rpm">RPM</option>
            `;
            break;
    }
}

async function calculate() {

    try {

        const response = await fetch("/calculate", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                calculator: calculatorType.value,
                value1: value1.value,
                value2: value2.value,
                unit1: unit1.value,
                unit2: unit2.value

            })

        });

        const data = await response.json();

        if (data.error) {

            result.innerHTML = `
                <div class="result-box">
                    <h3 style="color:red;">Error</h3>
                    <p>${data.error}</p>
                </div>
            `;

            return;
        }

        result.innerHTML = `
            <div class="result-grid">

                <div class="result-box">
                    <h3>📐 Formula</h3>
                    <div class="formula" id="formulaBox"></div>
                </div>

                <div class="result-box">
                    <h3>📝 Calculation</h3>
                    <div class="formula">
                        ${data.calculation}
                    </div>
                </div>

                <div class="result-box answer-box">
                    <h3>✅ Answer</h3>
                    <div class="answer">
                        ${data.answer.toFixed(3)} ${data.unit}
                    </div>
                </div>

            </div>
        `;

        renderFormula(data.formula, "formulaBox");

    }

    catch (error) {

        console.error(error);

        result.innerHTML = `
            <div class="result-box">
                <h3 style="color:red;">Calculation Failed</h3>
                <p>Please check your inputs and try again.</p>
            </div>
        `;

    }

}

function clearCalculator() {

    value1.value = "";
    value2.value = "";

    result.innerHTML = "Waiting for calculation...";

    value1.focus();

}