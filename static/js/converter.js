const category = document.getElementById("category");
const value = document.getElementById("value");

const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");

const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

category.addEventListener("change", updateUnits);
convertBtn.addEventListener("click", convert);

updateUnits();

function updateUnits() {

    let units = [];

    switch (category.value) {

        case "length":
            units = ["mm", "cm", "m", "km"];
            break;

        case "force":
            units = ["N", "kN"];
            break;

        case "area":
            units = ["mm2", "cm2", "m2"];
            break;

        case "torque":
            units = ["Nm", "kNm"];
            break;

    }

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    units.forEach(unit => {

        fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
        toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;

    });

}

async function convert() {

    if (value.value === "") {

        result.innerHTML = "Please enter a value.";
        return;

    }

    try {

        const response = await fetch("/convert", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                category: category.value,
                value: parseFloat(value.value),
                from: fromUnit.value,
                to: toUnit.value

            })

        });

        const data = await response.json();

        if (data.error) {

            result.innerHTML = data.error;
            return;

        }

        result.innerHTML = `${data.answer} ${data.unit}`;

    }

    catch (error) {

        console.error(error);

        result.innerHTML = "Conversion failed.";

    }

}