def convert_force(value, unit):

    if unit == "N":
        return value

    if unit == "kN":
        return value * 1000

    raise ValueError("Invalid force unit.")


def convert_area(value, unit):

    if unit == "m2":
        return value

    if unit == "cm2":
        return value / 10000

    if unit == "mm2":
        return value / 1_000_000

    raise ValueError("Invalid area unit.")


def convert_length(value, unit):

    if unit == "m":
        return value

    if unit == "cm":
        return value / 100

    if unit == "mm":
        return value / 1000

    if unit == "km":
        return value * 1000

    raise ValueError("Invalid length unit.")


def convert_torque(value, unit):

    if unit == "Nm":
        return value

    if unit == "kNm":
        return value * 1000

    raise ValueError("Invalid torque unit.")


# -----------------------------
# Convert FROM SI Units
# -----------------------------

def convert_from_si_force(value, unit):

    if unit == "N":
        return value

    if unit == "kN":
        return value / 1000

    raise ValueError("Invalid force unit.")


def convert_from_si_area(value, unit):

    if unit == "m2":
        return value

    if unit == "cm2":
        return value * 10000

    if unit == "mm2":
        return value * 1_000_000

    raise ValueError("Invalid area unit.")


def convert_from_si_length(value, unit):

    if unit == "m":
        return value

    if unit == "cm":
        return value * 100

    if unit == "mm":
        return value * 1000

    if unit == "km":
        return value / 1000

    raise ValueError("Invalid length unit.")


def convert_from_si_torque(value, unit):

    if unit == "Nm":
        return value

    if unit == "kNm":
        return value / 1000

    raise ValueError("Invalid torque unit.")