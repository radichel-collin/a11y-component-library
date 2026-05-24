import Checkbox from "../components/Checkbox";
import CheckboxGroup from "../components/CheckboxGroup";
import Button from "../components/Button";
import { useState } from "react";

export default function CheckboxGroupDemo() {
  const [toppings, setToppings] = useState({
    cheese: false,
    pepperoni: false,
    mushroom: false,
    sausage: false,
    onion: false,
    jalapeno: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <section aria-labelledby="checkbox-group-heading">
      <h2
        id="checkbox-group-heading"
        className="text-xl font-semibold text-gray-700 mt-6 mb-3"
      >
        Checkbox Group
      </h2>
      <CheckboxGroup
        id="pizza-topping-checkboxes"
        legend="Choose pizza toppings"
        helperText="Select at least one topping"
        errorMessage={error}
        successMessage={success}
      >
        <div className="grid grid-cols-3 gap-1">
          <Checkbox
            id="cheese-checkbox"
            label="Cheese"
            checked={toppings.cheese}
            onChange={(e) => {
              setToppings({ ...toppings, cheese: e.target.checked });
            }}
          ></Checkbox>

          <Checkbox
            id="pepperoni-checkbox"
            label="Pepperoni"
            checked={toppings.pepperoni}
            onChange={(e) => {
              setToppings({ ...toppings, pepperoni: e.target.checked });
            }}
          ></Checkbox>

          <Checkbox
            id="mushroom-checkbox"
            label="Mushroom"
            checked={toppings.mushroom}
            onChange={(e) => {
              setToppings({ ...toppings, mushroom: e.target.checked });
            }}
          ></Checkbox>

          <Checkbox
            id="sausage-checkbox"
            label="Sausage"
            checked={toppings.sausage}
            onChange={(e) => {
              setToppings({ ...toppings, sausage: e.target.checked });
            }}
          ></Checkbox>

          <Checkbox
            id="onion-checkbox"
            label="Onion"
            checked={toppings.onion}
            onChange={(e) => {
              setToppings({ ...toppings, onion: e.target.checked });
            }}
          ></Checkbox>

          <Checkbox
            id="jalapeno-checkbox"
            label="Jalapeno"
            checked={toppings.jalapeno}
            onChange={(e) => {
              setToppings({ ...toppings, jalapeno: e.target.checked });
            }}
          ></Checkbox>
        </div>
      </CheckboxGroup>
      <div className="my-2">
        <Button
          onClick={() => {
            if (Object.values(toppings).some(Boolean)) {
              setSuccess("Added to Cart!");
              setError("");
            } else {
              setError("Must select at least one topping");
              setSuccess("");
            }
          }}
          variant="primary"
        >
          Add to Cart
        </Button>
      </div>
    </section>
  );
}
