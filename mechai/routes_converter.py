from flask import Blueprint, render_template, request, jsonify

from mechai.utils import (
    convert_force,
    convert_area,
    convert_length,
    convert_torque,
    convert_from_si_force,
    convert_from_si_area,
    convert_from_si_length,
    convert_from_si_torque
)

converter = Blueprint("converter", __name__)


# ==========================
# Converter Page
# ==========================

@converter.route("/converter")
def converter_page():

    return render_template(
        "converter.html",
        active_page="converter"
    )


# ==========================
# Conversion API
# ==========================

@converter.route("/converter/api", methods=["POST"])
def convert():

    try:

        data = request.get_json()

        category = data.get("category")
        value = float(data.get("value"))

        from_unit = data.get("from")
        to_unit = data.get("to")

        if category == "length":

            si_value = convert_length(value, from_unit)
            answer = convert_from_si_length(si_value, to_unit)

        elif category == "force":

            si_value = convert_force(value, from_unit)
            answer = convert_from_si_force(si_value, to_unit)

        elif category == "area":

            si_value = convert_area(value, from_unit)
            answer = convert_from_si_area(si_value, to_unit)

        elif category == "torque":

            si_value = convert_torque(value, from_unit)
            answer = convert_from_si_torque(si_value, to_unit)

        else:

            return jsonify({
                "error": "Invalid category."
            }), 400

        return jsonify({

            "answer": round(answer, 6),
            "unit": to_unit

        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 400