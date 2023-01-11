function alertInfo() {
  let alert = document.querySelector(".alert");
  alert.classList.add('show');
  alert.classList.remove('hide');
  alert.classList.add('showAlert');
  setTimeout(() => {
    alert.classList.remove('show');
    alert.classList.add('hide');
  }, 2000);
}
export { alertInfo };

