export function changeIconColor(item) {
  let fillIcon;
  let fillPrefix;
  let fillExtra;

  if (item === "Email") {
    fillIcon = document.getElementById(`${item}Path`);
  } else if (item === "Password") {
    fillIcon = document.getElementById(`${item}Path1`);
    fillPrefix = document.getElementById(`${item}Path2`);
    fillPrefix.setAttribute("fill", "black");
  } else {
    if (item === "Empty") return;
    fillIcon = document.getElementById(`${item}Path1`);
    fillPrefix = document.getElementById(`${item}Path2`);
    fillExtra = document.getElementById(`${item}Path3`);
    fillPrefix.setAttribute("fill", "black");
    fillExtra.setAttribute("fill", "black");
  }
  fillIcon.setAttribute("fill", "black");
}
