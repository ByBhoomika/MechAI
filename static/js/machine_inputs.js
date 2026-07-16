function shaftInputs() {

    toolInputs.innerHTML = `

        <div class="input-group">

            <label>Torque (N·m)</label>

            <input
                type="number"
                id="value1"
                placeholder="Enter Torque">

        </div>

        <div class="input-group">

            <label>Allowable Shear Stress (MPa)</label>

            <input
                type="number"
                id="value2"
                placeholder="Enter Shear Stress">

        </div>

    `;

}


function keyInputs() {

    toolInputs.innerHTML = `

        <div class="input-group">

            <label>Shaft Diameter (mm)</label>

            <input
                type="number"
                id="value1"
                placeholder="Enter Shaft Diameter">

        </div>

    `;

}


function boltInputs() {

    toolInputs.innerHTML = `

        <div class="input-group">

            <label>Load (N)</label>

            <input
                type="number"
                id="value1"
                placeholder="Enter Load">

        </div>

        <div class="input-group">

            <label>Allowable Tensile Stress (MPa)</label>

            <input
                type="number"
                id="value2"
                placeholder="Enter Allowable Stress">

        </div>

    `;

}


function springInputs() {

    toolInputs.innerHTML = `

        <div class="input-group">

            <label>Force (N)</label>

            <input
                type="number"
                id="value1"
                placeholder="Enter Force">

        </div>

        <div class="input-group">

            <label>Deflection (mm)</label>

            <input
                type="number"
                id="value2"
                placeholder="Enter Deflection">

        </div>

    `;

}


function bearingInputs() {

    toolInputs.innerHTML = `

        <div class="input-group">

            <label>Shaft Diameter (mm)</label>

            <input
                type="number"
                id="value1"
                placeholder="Enter Shaft Diameter">

        </div>

    `;

}


function gearInputs() {

    toolInputs.innerHTML = `

        <div class="input-group">

            <label>Driver Teeth</label>

            <input
                type="number"
                id="value1"
                placeholder="Enter Driver Teeth">

        </div>

        <div class="input-group">

            <label>Driven Teeth</label>

            <input
                type="number"
                id="value2"
                placeholder="Enter Driven Teeth">

        </div>

        <div class="input-group">

            <label>Driver RPM</label>

            <input
                type="number"
                id="value3"
                placeholder="Enter Driver RPM">

        </div>

    `;

}

function beltInputs() {

    toolInputs.innerHTML = `

        <div class="input-group">

            <label>Driver Pulley Diameter (mm)</label>

            <input
                type="number"
                id="value1"
                placeholder="Enter Driver Diameter">

        </div>

        <div class="input-group">

            <label>Driven Pulley Diameter (mm)</label>

            <input
                type="number"
                id="value2"
                placeholder="Enter Driven Diameter">

        </div>

        <div class="input-group">

            <label>Driver RPM</label>

            <input
                type="number"
                id="value3"
                placeholder="Enter Driver RPM">

        </div>

    `;

}


function chainInputs() {

    toolInputs.innerHTML = `

        <div class="input-group">

            <label>Driver Sprocket Teeth</label>

            <input
                type="number"
                id="value1"
                placeholder="Enter Driver Teeth">

        </div>

        <div class="input-group">

            <label>Driven Sprocket Teeth</label>

            <input
                type="number"
                id="value2"
                placeholder="Enter Driven Teeth">

        </div>

        <div class="input-group">

            <label>Driver RPM</label>

            <input
                type="number"
                id="value3"
                placeholder="Enter Driver RPM">

        </div>

    `;

}


const inputHandlers = {

    shaft: shaftInputs,
    key: keyInputs,
    bolt: boltInputs,
    spring: springInputs,
    bearing: bearingInputs,
    gear: gearInputs,
    belt: beltInputs,
    chain: chainInputs

};


function updateInputs() {

    inputHandlers[toolSelect.value]();

}