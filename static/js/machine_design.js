const toolSelect = document.getElementById("toolSelect");
const calculateBtn = document.getElementById("calculateDesignBtn");
const result = document.getElementById("designResult");
const toolInputs = document.getElementById("toolInputs");

toolSelect.addEventListener("change", updateInputs);
calculateBtn.addEventListener("click", calculate);

updateInputs();

function getValues() {

    return {

        value1: document.getElementById("value1")?.value || "",
        value2: document.getElementById("value2")?.value || "",
        value3: document.getElementById("value3")?.value || ""

    };

}

async function calculate() {

    try {

        const values = getValues();

        // ==========================
        // Two-input tools
        // ==========================

        if (
            toolSelect.value === "shaft" ||
            toolSelect.value === "bolt" ||
            toolSelect.value === "spring"
        ) {

            if (values.value1 === "" || values.value2 === "") {

                result.innerHTML = "Please enter all values.";
                return;

            }

        }

        // ==========================
        // One-input tools
        // ==========================

        if (
            toolSelect.value === "key" ||
            toolSelect.value === "bearing"
        ) {

            if (values.value1 === "") {

                result.innerHTML = "Please enter the required value.";
                return;

            }

        }

        // ==========================
        // Gear
        // ==========================

        if (toolSelect.value === "gear") {

            if (
                values.value1 === "" ||
                values.value2 === "" ||
                values.value3 === ""
            ) {

                result.innerHTML = "Please enter all values.";
                return;

            }

        }

        const data = await calculateMachineDesign(

            toolSelect.value,
            values.value1,
            values.value2,
            values.value3

        );

        if (data.error) {

            result.innerHTML = data.error;
            return;

        }

        resultHandlers[toolSelect.value](data);

    }

    catch (error) {

        console.error(error);

        result.innerHTML = "Calculation failed.";

    }

}