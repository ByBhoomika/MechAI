// ===============================
// Load Saved Settings
// ===============================

document.addEventListener("DOMContentLoaded", loadSettings);

const saveBtn = document.getElementById("saveSettingsBtn");
const resetBtn = document.getElementById("resetSettingsBtn");

if (saveBtn) {
    saveBtn.addEventListener("click", saveSettings);
}

if (resetBtn) {
    resetBtn.addEventListener("click", resetSettings);
}

// ===============================
// Save Settings
// ===============================

function saveSettings() {

    const settings = {

        theme: document.querySelector("input[name='theme']:checked").value,

        units: document.querySelector("input[name='units']:checked").value,

        precision: document.getElementById("precision").value,

        responseStyle:
            document.querySelector("input[name='response']:checked").value,

        markdown:
            document.getElementById("markdown").checked,

        latex:
            document.getElementById("latex").checked,

        welcome:
            document.getElementById("welcome").checked,

        descriptions:
            document.getElementById("descriptions").checked,

        developer:
            document.getElementById("developer").checked

    };

    localStorage.setItem(
        "mechaiSettings",
        JSON.stringify(settings)
    );

    alert("Settings saved successfully.");

}

// ===============================
// Load Settings
// ===============================

function loadSettings() {

    const saved =
        localStorage.getItem("mechaiSettings");

    if (!saved) return;

    const settings = JSON.parse(saved);

    document.querySelector(
        `input[name="theme"][value="${settings.theme}"]`
    ).checked = true;

    document.querySelector(
        `input[name="units"][value="${settings.units}"]`
    ).checked = true;

    document.getElementById("precision").value =
        settings.precision;

    document.querySelector(
        `input[name="response"][value="${settings.responseStyle}"]`
    ).checked = true;

    document.getElementById("markdown").checked =
        settings.markdown;

    document.getElementById("latex").checked =
        settings.latex;

    document.getElementById("welcome").checked =
        settings.welcome;

    document.getElementById("descriptions").checked =
        settings.descriptions;

    document.getElementById("developer").checked =
        settings.developer;

}

// ===============================
// Reset
// ===============================

function resetSettings() {

    localStorage.removeItem("mechaiSettings");

    location.reload();

}