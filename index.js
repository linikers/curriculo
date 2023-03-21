const showLoading = () => {
  const load = document.createElement("div");
  load.classList.add("load");

  const loading = document.createElement("div");
  loading.classList.add("loading");

  load.appendChild(loading);
  document.body.appendChild(load);

  setTimeout(() => hideLoading(), 1500);
};
const hideLoading = () => {
  const loadOff = document.getElementsByClassName("load");
  if (loadOff.length) {
    loadOff[0].remove();
  }
};
showLoading();
