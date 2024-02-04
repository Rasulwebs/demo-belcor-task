export const resetUser = () => {
  window.localStorage.clear();
  window.location.href = "/login";
};
