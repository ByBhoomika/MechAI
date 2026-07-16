from flask import Blueprint, render_template, request, jsonify

from mechai.calculators.machine_design import (
    calculate_shaft_diameter,
    calculate_key_dimensions,
    calculate_bolt,
    calculate_spring,
    calculate_bearing,
    calculate_gear,
    calculate_belt,
    calculate_chain,
)

machine_design = Blueprint("machine_design", __name__)


@machine_design.route("/machine-design")
def machine_design_page():
    return render_template(
    "machine_design.html",
    active_page="machine_design"
)


@machine_design.route("/machine-design/calculate", methods=["POST"])
def calculate_design():

    try:

        data = request.get_json()

        tool = data.get("tool")
        value1 = float(data.get("value1") or 0)
        value2 = float(data.get("value2") or 0)

        # ==========================
        # SHAFT DESIGN
        # ==========================
        if tool == "shaft":

            answer = calculate_shaft_diameter(value1, value2)

            return jsonify({

                "formula": r"d=\left(\frac{16T}{\pi\tau}\right)^{\frac{1}{3}}",

                "calculation": f"d=((16×{value1}×1000)/(π×{value2}))^(1/3)",

                "unit": "mm",

                "answer": answer

            })

        # ==========================
        # STANDARD KEY
        # ==========================
        elif tool == "key":

            key = calculate_key_dimensions(value1)

            return jsonify({

                "formula": r"\text{Standard Key Selection}",

                "calculation": f"Shaft Diameter = {value1} mm",

                "answer": key

            })

        # ==========================
        # STANDARD BOLT
        # ==========================
        elif tool == "bolt":

            bolt = calculate_bolt(value1, value2)

            return jsonify({

                "formula": r"A=\frac{F}{\sigma}",

                "calculation": f"A = {value1}/{value2}",

                "answer": bolt

            })

        # ==========================
        # SPRING DESIGN
        # ==========================
        elif tool == "spring":

            spring = calculate_spring(value1, value2)

            return jsonify({

                "formula": r"k=\frac{F}{\delta}",

                "calculation": f"k = {value1}/{value2}",

                "answer": spring

            })

        # ==========================
        # BEARING SELECTION
        # ==========================
        elif tool == "bearing":

            bearing = calculate_bearing(value1)

            return jsonify({

                "formula": r"\text{ISO 6200 Series Bearing Selection}",

                "calculation": f"Shaft Diameter = {value1} mm",

                "answer": bearing

            })

        # ==========================
        # GEAR
        # ==========================
        elif tool == "gear":

            driver_rpm = float(data.get("value3") or 0)

            gear = calculate_gear(
                value1,
                value2,
                driver_rpm
            )

            return jsonify({

                "formula": r"i=\frac{Z_2}{Z_1},\qquad N_2=\frac{N_1}{i}",

                "calculation":
                f"Ratio = {value2}/{value1}, RPM = {driver_rpm}/({value2}/{value1})",

                "answer": gear

            })

        # ==========================
        # BELT
        # ==========================
        elif tool == "belt":

            driver_rpm = float(data.get("value3") or 0)

            belt = calculate_belt(
                value1,
                value2,
                driver_rpm
            )

            return jsonify({

                "formula": r"N_1D_1=N_2D_2",

                "calculation":
                f"N₂ = ({driver_rpm} × {value1}) / {value2}",

                "answer": belt

            })
        # ==========================
        # CHAIN
        # ==========================
        elif tool == "chain":
            driver_rpm = float(data.get("value3") or 0)
            chain = calculate_chain(
                value1,
                value2,
                driver_rpm
            )
            return jsonify({
                "formula": r"i=\frac{T_2}{T_1}",
                "calculation":
                f"N₂ = ({driver_rpm} × {value1}) / {value2}",
                "answer": chain
            })

        else:
            return jsonify({
                "error": "Unknown tool."
            }), 400

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 400