from math import pi


def calculate_stress(force, area):
    """
    Stress = Force / Area
    Returns stress in Pascals (Pa)
    """

    if area <= 0:
        raise ValueError("Area must be greater than zero.")

    return force / area


def calculate_strain(change_in_length, original_length):
    """
    Strain = ΔL / L
    Dimensionless
    """

    if original_length <= 0:
        raise ValueError("Original length must be greater than zero.")

    return change_in_length / original_length


def calculate_pressure(force, area):
    """
    Pressure = Force / Area
    Returns pressure in Pascals (Pa)
    """

    if area <= 0:
        raise ValueError("Area must be greater than zero.")

    return force / area


def calculate_torque(force, radius):
    """
    Torque = Force × Radius
    Returns torque in N·m
    """

    return force * radius


def calculate_power(torque, rpm):
    """
    Power = T × ω
    ω = 2πN/60
    Returns power in Watts
    """

    angular_velocity = (2 * pi * rpm) / 60

    return torque * angular_velocity