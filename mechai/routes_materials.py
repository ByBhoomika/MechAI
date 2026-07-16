from flask import Blueprint, render_template, request, jsonify

from mechai.materials_data import MATERIALS

materials = Blueprint("materials", __name__)


@materials.route("/materials")
def materials_page():
    return render_template(
        "materials.html",
        active_page="materials"
    )

@materials.route("/materials/list")
def material_list():

    return jsonify(
        sorted(MATERIALS.keys())
    )


@materials.route("/material", methods=["POST"])
def get_material():

    data = request.get_json()

    name = data.get("material", "").strip()

    for material_name, properties in MATERIALS.items():

        if name.lower() in material_name.lower():

            return jsonify(properties)

    return jsonify({
        "error": "Material not found."
    }), 404