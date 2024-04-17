import { Card } from "../../../components/CART/card/card";
import { confirmDelete } from "../confirmDelete/confirmDelete";

export function showModal(e, item) {
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  const modalCard = document.getElementById("modalCard");
  modalCard.innerHTML = "";

  if (e.currentTarget.id === "trash") {
    modalCard.append(Card(item, "none"));
    modal.style.display = "block";
    overlay.style.display = "block";
  }
  const cancel = document.getElementById("cancel");
  cancel.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });
  const remove = document.getElementById("remove");
  remove.addEventListener("click", () => {
    confirmDelete(item);
    modal.style.display = "none";
    overlay.style.display = "none"; 
});
}
