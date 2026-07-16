async function calculateMachineDesign(tool, value1, value2, value3 = 0) {

    const response = await fetch("/machine-design/calculate", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            tool: tool,
            value1: value1,
            value2: value2,
            value3: value3

        })

    });

    return await response.json();

}