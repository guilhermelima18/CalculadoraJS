function Calculadora() {
    return {
        display: document.querySelector("#number"),

        init() {
            this.clickButtons();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener("keyup", (e) => {
                if (e.keyCode === 13) {
                    this.makeAccount();
                }
            });
        },

        makeAccount() {
            let account = this.display.value;

            try {
                account = eval(account);

                if (!account) {
                    alert("Conta inválida");
                    return;
                }

                this.display.value = String(account);
            } catch (error) {
                alert("Conta inválida");
                return;
            }
        },

        clearDisplay() {
            this.display.value = "";
        },

        numberClear() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clickButtons() {
            document.addEventListener("click", (e) => {
                const element = e.target;

                if (element.classList.contains("btn-num")) {
                    this.btnDisplay(element.innerText);
                }

                if (element.classList.contains("btn-clear")) {
                    this.clearDisplay();
                }

                if (element.classList.contains("btn-del")) {
                    this.numberClear();
                }

                if (element.classList.contains("btn-eq")) {
                    this.makeAccount();
                }
            })
        },

        btnDisplay(value) {
            this.display.value += value;
        }
    };
}

const calculator = Calculadora();
calculator.init();