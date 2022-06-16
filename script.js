fnameInput = document.getElementById('firstname');
lnameInput = document.getElementById('lastname');
emailInput = document.getElementById('email');
passwordInput = document.getElementById('password');

inputs = [fnameInput, lnameInput, emailInput, passwordInput];

fnameerr = document.getElementById('fnameerr');
lnameerr = document.getElementById('lnameerr');
emailerr = document.getElementById('emailerr');
passworderr = document.getElementById('passworderr');

submitButton = document.getElementById('submit');


const manageHiddenClass = (state) => {
    if (state === "add") {
        if (fnameInput.value !== "") {
            fnameerr.classList.add('hidden');
        }

        if (lnameInput.value !== "") {
            lnameerr.classList.add('hidden');
        }

        if (emailInput.value !== "") {
            emailerr.classList.add('hidden');
        }

        if (passwordInput.value !== "") {
            passworderr.classList.add('hidden');
        }
    }

    else if (state === "remove") {
        if (fnameInput.value === "") {
            fnameerr.classList.remove('hidden');
        }

        if (lnameInput.value === "") {
            lnameerr.classList.remove('hidden');
        }

        if (emailInput.value === "") {
            emailerr.classList.remove('hidden');
        }

        if (passwordInput.value === "") {
            passworderr.classList.remove('hidden');
        }
    }
}

inputs.forEach((inputElement) => {
    inputElement.addEventListener("focus", () => {
        inputElement.parentElement.classList.add('active');
    })
})

inputs.forEach((inputElement) => {
    inputElement.addEventListener("blur", () => {
        inputElement.parentElement.classList.remove('active');
    })
})

submitButton.addEventListener('click', () => {
    manageHiddenClass("add");
    manageHiddenClass("remove");
})