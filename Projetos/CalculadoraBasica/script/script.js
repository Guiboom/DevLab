const display = document.getElementById("display")
const buttons = document.querySelectorAll(".buttons button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value
        const action = button.dataset.action
        if (value) {/* === value != undefined */
            /* let rvalue = parseFloat(value) */
            console.log(value)
            document.getElementById("display").innerText += value;
        } else if (action) {
            console.log(action)
            /* let caractereReal = action.replace(/"/g, ''); */
        } else {
            console.log("ERROR dataset undefined")
        }

    })
})
