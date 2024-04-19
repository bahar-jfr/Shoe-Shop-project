import { ShippingCard } from "../../../components/CHECKOUT/shippingCard/shippingCard";

export function renderShippingAdd() {
  const textVar = ["Home", "Office", "Apartment", "Parent's House"];
  return textVar.map((item) => ShippingCard(item, "radio"));
}
