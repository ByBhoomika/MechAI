function renderFormula(formula, elementId) {

    const element = document.getElementById(elementId);

    if (!element) {
        return;
    }

    katex.render(formula, element, {

        throwOnError: false,

        displayMode: true

    });

}