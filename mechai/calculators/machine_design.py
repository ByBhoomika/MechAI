def calculate_key_dimensions(shaft_diameter):

    key_table = [

        (6, 8, 2, 2),
        (8, 10, 3, 3),
        (10, 12, 4, 4),
        (12, 17, 5, 5),
        (17, 22, 6, 6),
        (22, 30, 8, 7),
        (30, 38, 10, 8),
        (38, 44, 12, 8),
        (44, 50, 14, 9),
        (50, 58, 16, 10),
        (58, 65, 18, 11),
        (65, 75, 20, 12),
        (75, 85, 22, 14),
        (85, 95, 25, 14),
        (95, 110, 28, 16)

    ]

    for minimum, maximum, width, height in key_table:

        if minimum <= shaft_diameter < maximum:

            return {
                "range": f"{minimum}-{maximum} mm",
                "width": width,
                "height": height
            }

    raise ValueError("No standard key available for this shaft diameter.")
import math


def calculate_spring(force, deflection):
    """
    Calculates spring stiffness.

    Parameters
    ----------
    force : N
    deflection : mm

    Returns
    -------
    Dictionary containing spring stiffness.
    """

    if deflection <= 0:
        raise ValueError("Deflection must be greater than zero.")

    stiffness = force / deflection

    return {
        "stiffness": round(stiffness, 2)
    }
import math


def calculate_shaft_diameter(torque, shear_stress):
    """
    Calculates the minimum solid shaft diameter.

    Parameters
    ----------
    torque : N·m
    shear_stress : MPa

    Returns
    -------
    Diameter in mm
    """

    # Convert units
    torque *= 1000          # N·m → N·mm
    shear_stress = shear_stress  # MPa = N/mm²

    diameter = ((16 * torque) / (math.pi * shear_stress)) ** (1 / 3)

    return diameter
def calculate_bolt(load, allowable_stress):
    """
    Selects the smallest standard metric bolt based on tensile stress area.

    Parameters
    ----------
    load : N
    allowable_stress : MPa (N/mm²)

    Returns
    -------
    Dictionary containing recommended bolt.
    """

    required_area = load / allowable_stress

    bolt_table = [

        ("M6", 20.1),
        ("M8", 36.6),
        ("M10", 58.0),
        ("M12", 84.3),
        ("M16", 157.0),
        ("M20", 245.0),
        ("M24", 353.0)

    ]
    # ==========================================================
# Standard Deep Groove Ball Bearing Selection (6200 Series)
# ==========================================================

def calculate_bearing(shaft_diameter):

    bearings = {

        10: ("6200", 30, 9),
        12: ("6201", 32, 10),
        15: ("6202", 35, 11),
        17: ("6203", 40, 12),
        20: ("6204", 47, 14),
        25: ("6205", 52, 15),
        30: ("6206", 62, 16),
        35: ("6207", 72, 17),
        40: ("6208", 80, 18),
        45: ("6209", 85, 19),
        50: ("6210", 90, 20)

    }

    shaft_diameter = int(round(shaft_diameter))

    if shaft_diameter not in bearings:

        raise ValueError(
            "No standard bearing found for this shaft diameter."
        )

    bearing, od, width = bearings[shaft_diameter]

    return {

        "bearing": bearing,
        "bore": shaft_diameter,
        "outer_diameter": od,
        "width": width

    }

    for bolt, area in bolt_table:

        if area >= required_area:

            return {
                "bolt": bolt,
                "required_area": round(required_area, 2),
                "stress_area": area
            }

    raise ValueError("No suitable standard bolt found.")
# ==========================================================
# Gear Ratio Calculator
# ==========================================================

def calculate_gear(driver_teeth, driven_teeth, driver_rpm):

    if driver_teeth <= 0 or driven_teeth <= 0:
        raise ValueError("Number of teeth must be greater than zero.")

    if driver_rpm <= 0:
        raise ValueError("Driver RPM must be greater than zero.")

    gear_ratio = driven_teeth / driver_teeth
    driven_rpm = driver_rpm / gear_ratio

    return {

        "gear_ratio": round(gear_ratio, 3),

        "driver_rpm": round(driver_rpm, 2),

        "driven_rpm": round(driven_rpm, 2),

        "speed_reduction": round(
            (1 - driven_rpm / driver_rpm) * 100,
            2
        )

    }
# ==========================================================
# Belt Drive Calculator
# ==========================================================

def calculate_belt(driver_diameter, driven_diameter, driver_rpm):

    if driver_diameter <= 0 or driven_diameter <= 0:
        raise ValueError("Pulley diameters must be greater than zero.")

    if driver_rpm <= 0:
        raise ValueError("Driver RPM must be greater than zero.")

    ratio = driven_diameter / driver_diameter
    driven_rpm = driver_rpm / ratio

    return {

        "belt_ratio": round(ratio, 3),
        "driver_rpm": round(driver_rpm, 2),
        "driven_rpm": round(driven_rpm, 2),
        "speed_reduction": round(
            (1 - driven_rpm / driver_rpm) * 100,
            2
        )

    }
# ==========================================================
# Chain Drive Calculator
# ==========================================================

def calculate_chain(driver_teeth, driven_teeth, driver_rpm):

    if driver_teeth <= 0 or driven_teeth <= 0:
        raise ValueError("Number of teeth must be greater than zero.")

    if driver_rpm <= 0:
        raise ValueError("Driver RPM must be greater than zero.")

    ratio = driven_teeth / driver_teeth
    driven_rpm = driver_rpm / ratio

    return {

        "chain_ratio": round(ratio, 3),

        "driver_rpm": round(driver_rpm, 2),

        "driven_rpm": round(driven_rpm, 2),

        "speed_reduction": round(
            (1 - driven_rpm / driver_rpm) * 100,
            2
        )

    }