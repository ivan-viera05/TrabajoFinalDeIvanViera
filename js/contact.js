const form = document.querySelector("#form");
form.addEventListener("submit", handlesubmit);
async function handlesubmit(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: formData,
    mode: "no-cors",
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert("Gracias por contactarnos");
  }
}
