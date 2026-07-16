from flask import Blueprint, render_template, request, jsonify

from mechai.calculators.engineering_calculators import (
    calculate_stress,
    calculate_strain,
    calculate_pressure,
    calculate_torque,
    calculate_power
)

from mechai.utils import (
    convert_force,
    convert_area,
    convert_length,
    convert_torque
)
calculator = Blueprint("calculator", __name__)


@calculator.route("/calculator")
def calculator_page():
    return render_template(
        "calculator.html",
        active_page="calculator"
    )


@calculator.route("/calculate", methods=["POST"])
def calculate():

    data = request.get_json()

    calculator_type = data.get("calculator")

    value1 = float(data.get("value1"))
    value2 = float(data.get("value2"))

    unit1 = data.get("unit1")
    unit2 = data.get("unit2")

    try:

        if calculator_type == "stress":

            force = convert_force(value1, unit1)
            area = convert_area(value2, unit2)

            answer = calculate_stress(force, area)

            return jsonify({
                "formula": r"\sigma=\frac{F}{A}",
                "calculation": f"σ = {force:.3f} ÷ {area:.6f}",
                "unit": "Pa",
                "answer": answer
            })

        elif calculator_type == "strain":

            change = convert_length(value1, unit1)
            original = convert_length(value2, unit2)

            answer = calculate_strain(change, original)

            return jsonify({
                "formula": r"\varepsilon=\frac{\Delta L}{L}",
                "calculation": f"ε = {change:.6f} ÷ {original:.6f}",
                "unit": "",
                "answer": answer
            })

        elif calculator_type == "pressure":

            force = convert_force(value1, unit1)
            area = convert_area(value2, unit2)

            answer = calculate_pressure(force, area)

            return jsonify({
                "formula": r"P=\frac{F}{A}",
                "calculation": f"P = {force:.3f} ÷ {area:.6f}",
                "unit": "Pa",
                "answer": answer
            })

        elif calculator_type == "torque":

            force = convert_force(value1, unit1)
            radius = convert_length(value2, unit2)

            answer = calculate_torque(force, radius)

            return jsonify({
                "formula": r"T=F\times r",
                "calculation": f"T = {force:.3f} × {radius:.6f}",
                "unit": "N·m",
                "answer": answer
            })

        elif calculator_type == "power":

            torque = convert_torque(value1, unit1)

            answer = calculate_power(torque, value2)

            return jsonify({
                "formula": r"P=T\omega",
                "calculation": f"P = {torque:.3f} × (2π × {value2:.2f} / 60)",
                "unit": "W",
                "answer": answer
            })

        return jsonify({
            "error": "Calculator not implemented."
        }), 400

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 400