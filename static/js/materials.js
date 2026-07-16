const searchBox = document.getElementById("materialSearch");
const materialList = document.getElementById("materialList");
const result = document.getElementById("materialResult");

// ==============================
// Initialize
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    loadMaterials();

});


// ==============================
// Load Materials
// ==============================

async function loadMaterials() {

    try {

        const response = await fetch("/materials/list");

        const materials = await response.json();

        materialList.innerHTML =
            `<option value="">Select Material</option>`;

        materials.forEach(material => {

            materialList.innerHTML +=
                `<option value="${material}">${material}</option>`;

        });

    }

    catch (error) {

        console.error(error);

        result.innerHTML = `
            <div class="result-box">
                Failed to load materials.
            </div>
        `;

    }

}


// ==============================
// Search Events
// ==============================

searchBox.addEventListener("input", searchMaterial);

materialList.addEventListener("change", () => {

    searchBox.value = materialList.value;

    searchMaterial();

});


// ==============================
// Search Material
// ==============================

async function searchMaterial() {

    const material = searchBox.value.trim();

    if (material === "") {

        result.innerHTML = "Select or search a material.";

        return;

    }

    try {

        const response = await fetch("/material", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                material: material

            })

        });

        const data = await response.json();

        if (data.error) {

            result.innerHTML = `
                <div class="result-box">
                    ${data.error}
                </div>
            `;

            return;

        }

        result.innerHTML = `

            <div class="result-grid">

                <div class="result-box">
                    <h3>Density</h3>
                    <div class="answer">${data["Density"]} kg/m³</div>
                </div>

                <div class="result-box">
                    <h3>Young's Modulus</h3>
                    <div class="answer">${data["Young's Modulus"]} GPa</div>
                </div>

                <div class="result-box">
                    <h3>Yield Strength</h3>
                    <div class="answer">${data["Yield Strength"]} MPa</div>
                </div>

                <div class="result-box">
                    <h3>Ultimate Strength</h3>
                    <div class="answer">${data["Ultimate Strength"]} MPa</div>
                </div>

                <div class="result-box">
                    <h3>Poisson Ratio</h3>
                    <div class="answer">${data["Poisson Ratio"]}</div>
                </div>

            </div>

        `;

    }

    catch (error) {

        console.error(error);

        result.innerHTML = `
            <div class="result-box">
                Failed to retrieve material.
            </div>
        `;

    }

}