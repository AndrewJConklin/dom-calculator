const $screen = document.querySelector("#screen")
const $buttons = document.querySelectorAll("span")
const $operators = document.querySelectorAll(".operator")
const $zero = document.querySelector("#zero")
const numbers = [$zero, $buttons[3], $buttons[4], $buttons[5], $buttons[7], $buttons[8], $buttons[9], $buttons[11], $buttons[12], $buttons[13]]
const theFour = [$operators[1], $operators[2], $operators[3], $operators[4]]
const $clear = document.querySelector("#clear")
const theSignMap = {
    "÷": "/",
    "x": "*",
    "+": "+",
    "-": "-"
}

$buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (numbers.includes(button)) {
            $screen.textContent += event.target.textContent
        }
        else if (theFour.includes(button)) {
            const newsign = theSignMap[event.target.textContent]
            $screen.textContent += newsign
        }
        else if (button === $clear) {
            $screen.textContent = ""
        }
        else {
            if ($screen.textContent.includes("/0")) {
                $screen.textContent = "Error"
            }
            else try {
                $screen.textContent = eval($screen.textContent)
            }
            catch (error) {
                $screen.textContent = "Error"
            }
        }
    })
})