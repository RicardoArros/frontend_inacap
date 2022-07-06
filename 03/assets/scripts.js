//
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //
  const nameErr = document.getElementById("username-error");
  const phoneErr = document.getElementById("phone-error");
  const emailErr = document.getElementById("email-error");
  const rutErr = document.getElementById("rut-error");
  const messageErr = document.getElementById("message-error");

  // NAME VALIDATION

  //
  let inputName;

  //
  document
    .getElementById("input-username")
    .addEventListener("keyup", validateName);

  //
  function validateName() {
    inputName = document.getElementById("input-username").value;

    if (inputName.length === 0) {
      nameErr.textContent = "Nombre es requerido";
      nameErr.classList.add("error");
      nameErr.classList.remove("success");

      return false;
    }

    if (inputName.length < 3) {
      nameErr.textContent = "Nombre debe tener al menos 3 caracteres";
      nameErr.classList.add("error");
      nameErr.classList.remove("success");

      return false;
    }

    nameErr.textContent = "Nombre es válido";
    nameErr.classList.add("success");
    nameErr.classList.remove("error");

    return true;
  }

  validateName();

  // PHONE VALIDATION

  //
  let inputPhone;

  //
  document
    .getElementById("input-phone")
    .addEventListener("keyup", validatePhone);

  //
  function validatePhone() {
    inputPhone = document.getElementById("input-phone").value;

    if (inputPhone.length === 0) {
      phoneErr.textContent = "Teléfono es requerido";
      phoneErr.classList.add("error");
      phoneErr.classList.remove("success");

      return false;
    }

    if (inputPhone.charAt(0) !== "9") {
      phoneErr.textContent = "Teléfono debe comenzar con 9";
      phoneErr.classList.add("error");
      phoneErr.classList.remove("success");

      return false;
    }

    if (inputPhone.length !== 9) {
      phoneErr.textContent = "Teléfono debe tener solo 9 dígitos";
      phoneErr.classList.add("error");
      phoneErr.classList.remove("success");

      return false;
    }

    if (!inputPhone.match(/^[0-9]{9}$/)) {
      phoneErr.textContent = "Teléfono debe tener solo numeros";
      phoneErr.classList.add("error");
      phoneErr.classList.remove("success");

      return false;
    }

    phoneErr.textContent = "Teléfono es válido";
    phoneErr.classList.add("success");
    phoneErr.classList.remove("error");

    return true;
  }

  validatePhone();

  // EMAIL VALIDATION

  let inputEmail;

  //
  document
    .getElementById("input-email")
    .addEventListener("keyup", validateEmail);

  //
  function validateEmail() {
    inputEmail = document.getElementById("input-email").value;

    if (inputEmail.length === 0) {
      emailErr.textContent = "Email es requerido";
      emailErr.classList.add("error");
      emailErr.classList.remove("success");

      return false;
    }

    if (!inputEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      emailErr.textContent = "Email no correcto";
      emailErr.classList.add("error");
      emailErr.classList.remove("success");

      return false;
    }

    emailErr.textContent = "Email es válido";
    emailErr.classList.add("success");
    emailErr.classList.remove("error");

    return true;
  }

  validateEmail();

  // RUT VALIDATION

  //
  let inputRut;

  document
    .getElementById("input-rut")
    .addEventListener("keyup", validateRut);

  //
  function validateRut() {
    inputRut = document.getElementById("input-rut").value;

    if (inputRut.length === 0) {
      rutErr.textContent = `Rut es requerido`;
      rutErr.classList.add("error");
      rutErr.classList.remove("success");

      return false;
    }

    if (inputRut.length < 9 || inputRut.length > 10) {
      rutErr.textContent = `Rut debe tener entre 9 y 10 caracteres`;
      rutErr.classList.add("error");
      rutErr.classList.remove("success");

      return false;
    }

    if (!inputRut.match(/^[0-9A-Za-z\s\-]+$/)) {
      rutErr.textContent = `Rut debe tener un guión y sin puntos`;
      rutErr.classList.add("error");
      rutErr.classList.remove("success");

      return false;
    }

    rutErr.textContent = "Rut es válido";
    rutErr.classList.add("success");
    rutErr.classList.remove("error");

    return true;
  }

  validateRut();

  // MESSAGE VALIDATION

  //
  let inputMessage;

  //
  document
    .getElementById("input-message")
    .addEventListener("keyup", validateMessage);

  //
  function validateMessage() {
    inputMessage = document.getElementById("input-message").value;

    let required = 30;

    let left = required - inputMessage.length;

    if (inputMessage.length === 0) {
      messageErr.textContent = `Asunto es requerido`;
      messageErr.classList.add("error");
      messageErr.classList.remove("success");

      return false;
    }

    if (left > 0) {
      messageErr.textContent = `${left} más caracteres requeridos`;
      messageErr.classList.add("error");
      messageErr.classList.remove("success");

      return false;
    }

    messageErr.textContent = "Asunto es válido";
    messageErr.classList.add("success");
    messageErr.classList.remove("error");

    return true;
  }

  validateMessage();

  // SUBMIT VALIDATION

  const submitErr = document.getElementById("submit-error");

  //
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateRut() ||
    !validateMessage()
  ) {
    submitErr.textContent = "Tiene errores";
    submitErr.classList.add("error");
    submitErr.classList.remove("success");

    return false;
    
  } else {
    submitErr.textContent = "Todo correcto";
    submitErr.classList.add("success");
    submitErr.classList.remove("error");

    form.reset();

    alert(
      `Todo correcto. \nNombre de usuario: ${inputName}. \nTeléfono: ${inputPhone}. \nCorreo: ${inputEmail}. \nRut: ${inputRut} \nAsunto: ${inputMessage}. `
    );
  }
});
