import os
from flask import Flask

from mechai.routes_calculator import calculator
from mechai.routes_converter import converter
from mechai.routes_materials import materials
from mechai.routes_machine_design import machine_design
from mechai.services.routes_home import home

app = Flask(__name__)

app.register_blueprint(home)
app.register_blueprint(calculator)
app.register_blueprint(converter)
app.register_blueprint(materials)
app.register_blueprint(machine_design)

if __name__ == "__main__":
    import os

app.run(
    host="0.0.0.0",
    port=int(os.environ.get("PORT", 5000)),
    debug=False
)