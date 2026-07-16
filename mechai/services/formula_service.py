import math


def calculate_stress(force, area):
    return force / area


def calculate_strain(change_length, original_length):
    return change_length / original_length


def calculate_pressure(force, area):
    return force / area


def calculate_torque(force, radius):
    return force * radius


def calculate_power(torque, rpm):

    omega = (2 * math.pi * rpm) / 60

    return torque * omega