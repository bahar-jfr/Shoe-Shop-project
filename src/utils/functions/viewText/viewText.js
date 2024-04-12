export function viewText(e) {
  const parent = document.getElementById("viewText").parentElement;
  const viewText = document.getElementById("viewText");

  if (e.target.id === "") return;
  else if (e.target.id === "viewText") {
    viewText.innerText = "";
    parent.classList.remove("line-clamp-4");
  } else {
    viewText.innerText = "view more";
    parent.classList.add("line-clamp-4");
  }
}
