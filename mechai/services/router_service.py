import re

from mechai.services.ai_service import ask_gemini
from mechai.services.pdf_service import search_pdf
from mechai.services.formula_service import (
    calculate_stress,
    calculate_pressure,
    calculate_torque,
    calculate_power,
    calculate_strain
)


def process_query(user_message):

    text = user_message.lower()

    try:

        if "stress" in text:

            numbers = list(map(float, re.findall(r"\d+\.?\d*", text)))

            if len(numbers) >= 2:

                result = calculate_stress(numbers[0], numbers[1])

                return f"### Stress\n\n**Answer:** {result:.3f}"

        elif "pressure" in text:

            numbers = list(map(float, re.findall(r"\d+\.?\d*", text)))

            if len(numbers) >= 2:

                result = calculate_pressure(numbers[0], numbers[1])

                return f"### Pressure\n\n**Answer:** {result:.3f}"

        elif "torque" in text:

            numbers = list(map(float, re.findall(r"\d+\.?\d*", text)))

            if len(numbers) >= 2:

                result = calculate_torque(numbers[0], numbers[1])

                return f"### Torque\n\n**Answer:** {result:.3f}"

        elif "power" in text:

            numbers = list(map(float, re.findall(r"\d+\.?\d*", text)))

            if len(numbers) >= 2:

                result = calculate_power(numbers[0], numbers[1])

                return f"### Power\n\n**Answer:** {result:.3f}"

        elif "strain" in text:

            numbers = list(map(float, re.findall(r"\d+\.?\d*", text)))

            if len(numbers) >= 2:

                result = calculate_strain(numbers[0], numbers[1])

                return f"### Strain\n\n**Answer:** {result:.6f}"

    except:
        pass

    context = search_pdf(user_message)

    return ask_gemini(user_message, context)