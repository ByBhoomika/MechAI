function displayShaft(data) {

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
                <h3>✅ Shaft Diameter</h3>
                <div class="answer">
                    ${data.answer.toFixed(3)} ${data.unit}
                </div>
            </div>

        </div>

    `;

    renderFormula(data.formula, "formulaBox");

}


function displayKey(data) {

    result.innerHTML = `

        <div class="result-grid">

            <div class="result-box">
                <h3>📐 Selection Method</h3>
                <div class="formula" id="formulaBox"></div>
            </div>

            <div class="result-box">
                <h3>📏 Recommended Key</h3>
                <div class="answer">
                    ${data.answer.width} × ${data.answer.height} mm
                </div>
            </div>

            <div class="result-box">
                <h3>📌 Shaft Diameter Range</h3>
                <div class="answer">
                    ${data.answer.range}
                </div>
            </div>

        </div>

    `;

    renderFormula(data.formula, "formulaBox");

}


function displayBolt(data) {

    result.innerHTML = `

        <div class="result-grid">

            <div class="result-box">
                <h3>📐 Formula</h3>
                <div class="formula" id="formulaBox"></div>
            </div>

            <div class="result-box">
                <h3>🔩 Recommended Bolt</h3>
                <div class="answer">
                    ${data.answer.bolt}
                </div>
            </div>

            <div class="result-box">
                <h3>📏 Required Area</h3>
                <div class="answer">
                    ${data.answer.required_area} mm²
                </div>
            </div>

            <div class="result-box">
                <h3>📋 Standard Stress Area</h3>
                <div class="answer">
                    ${data.answer.stress_area} mm²
                </div>
            </div>

        </div>

    `;

    renderFormula(data.formula, "formulaBox");

}


function displaySpring(data) {

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
                <h3>🌱 Spring Stiffness</h3>
                <div class="answer">
                    ${data.answer.stiffness} N/mm
                </div>
            </div>

        </div>

    `;

    renderFormula(data.formula, "formulaBox");

}


function displayBearing(data) {

    result.innerHTML = `

        <div class="result-grid">

            <div class="result-box">

                <h3>📐 Selection Method</h3>

                <div class="formula" id="formulaBox"></div>

            </div>

            <div class="result-box">

                <h3>🔩 Bearing</h3>

                <div class="answer">

                    ${data.answer.bearing}

                </div>

            </div>

            <div class="result-box">

                <h3>📏 Bore</h3>

                <div class="answer">

                    ${data.answer.bore} mm

                </div>

            </div>

            <div class="result-box">

                <h3>📏 Outer Diameter</h3>

                <div class="answer">

                    ${data.answer.outer_diameter} mm

                </div>

            </div>

            <div class="result-box">

                <h3>📏 Width</h3>

                <div class="answer">

                    ${data.answer.width} mm

                </div>

            </div>

        </div>

    `;

    renderFormula(data.formula, "formulaBox");

}


function displayGear(data) {

    result.innerHTML = `

        <div class="result-grid">

            <div class="result-box">

                <h3>📐 Formula</h3>

                <div class="formula" id="formulaBox"></div>

            </div>

            <div class="result-box">

                <h3>⚙️ Gear Ratio</h3>

                <div class="answer">

                    ${data.answer.gear_ratio} : 1

                </div>

            </div>

            <div class="result-box">

                <h3>🔄 Driver RPM</h3>

                <div class="answer">

                    ${data.answer.driver_rpm} RPM

                </div>

            </div>

            <div class="result-box">

                <h3>⚙️ Driven RPM</h3>

                <div class="answer">

                    ${data.answer.driven_rpm} RPM

                </div>

            </div>

            <div class="result-box">

                <h3>📉 Speed Reduction</h3>

                <div class="answer">

                    ${data.answer.speed_reduction} %

                </div>

            </div>

        </div>

    `;

    renderFormula(data.formula, "formulaBox");

}


function displayBelt(data) {

    result.innerHTML = `

        <div class="result-grid">

            <div class="result-box">
                <h3>📐 Formula</h3>
                <div class="formula" id="formulaBox"></div>
            </div>

            <div class="result-box">
                <h3>🛞 Belt Ratio</h3>
                <div class="answer">
                    ${data.answer.belt_ratio} : 1
                </div>
            </div>

            <div class="result-box">
                <h3>🔄 Driver RPM</h3>
                <div class="answer">
                    ${data.answer.driver_rpm}
                </div>
            </div>

            <div class="result-box">
                <h3>⚙️ Driven RPM</h3>
                <div class="answer">
                    ${data.answer.driven_rpm}
                </div>
            </div>

            <div class="result-box">
                <h3>📉 Speed Reduction</h3>
                <div class="answer">
                    ${data.answer.speed_reduction} %
                </div>
            </div>

        </div>

    `;

    renderFormula(data.formula, "formulaBox");

}

function displayChain(data) {

    result.innerHTML = `

        <div class="result-grid">

            <div class="result-box">

                <h3>📐 Formula</h3>

                <div class="formula" id="formulaBox"></div>

            </div>

            <div class="result-box">

                <h3>⛓️ Chain Ratio</h3>

                <div class="answer">

                    ${data.answer.chain_ratio} : 1

                </div>

            </div>

            <div class="result-box">

                <h3>🔄 Driver RPM</h3>

                <div class="answer">

                    ${data.answer.driver_rpm}

                </div>

            </div>

            <div class="result-box">

                <h3>⚙️ Driven RPM</h3>

                <div class="answer">

                    ${data.answer.driven_rpm}

                </div>

            </div>

            <div class="result-box">

                <h3>📉 Speed Reduction</h3>

                <div class="answer">

                    ${data.answer.speed_reduction} %

                </div>

            </div>

        </div>

    `;

    renderFormula(data.formula, "formulaBox");

}

const resultHandlers = {

    shaft: displayShaft,
    key: displayKey,
    bolt: displayBolt,
    spring: displaySpring,
    bearing: displayBearing,
    gear: displayGear,
    belt: displayBelt,
    chain: displayChain

};