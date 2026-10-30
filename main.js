document.querySelectorAll("button[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    const nextId = button.dataset.next;
    const nextElement = document.getElementById(nextId);

    if (nextElement) {
      nextElement.hidden = false;
    }

    button.disabled = true;
  });
});