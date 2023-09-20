// Tambahkan kode JavaScript kalian di file ini
const submitBtn = document.getElementById("submit-form");

function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return { name, email, city, zipCode, status };
}

function isNumber(num) {
  return !isNaN(num) && num !== "";
}

function checkboxIsChecked() {
  const statusCheckbox = document.getElementById("status");
  return statusCheckbox.checked;
}

function validateFormData(formData) {
  if (formData !== null) {
    if (isNumber(formData.zipCode)) {
      if (document.getElementById("status").checked) {
        return true;
      }
    }
  }
  return false;
}

function submit() {
  const formData = handleGetFormData();
  const isValid = validateFormData(formData);

  let warningElement = document.getElementById("warning");

  if (!isValid) {
    warningElement.textContent = "Periksa form anda sekali lagi";
  } else {
    warningElement.textContent = "";
  }
}

const form = document.getElementById("submit-form");
form.addEventListener("click", function (e) {
  e.preventDefault();
  submit();
});
