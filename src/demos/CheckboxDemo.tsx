import Checkbox from "../components/Checkbox/Checkbox";
import Button from "../components/Button";
import { useState } from "react";

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <section aria-labelledby="checkbox-heading">
      <h2
        id="checkbox-heading"
        className="text-xl font-semibold text-gray-700 mt-6 mb-3"
      >
        Checkbox
      </h2>
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <Checkbox
            id="terms-checkbox"
            label="I agree to the terms & conditions"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            required
            errorMessage={error}
          ></Checkbox>
          <Button
            onClick={() => {
              if (!checked) {
                setError("Please accept the terms and conditions to proceed.");
                setSuccess("");
              } else {
                setSuccess("Success!");
                setError("");
              }
            }}
            variant="primary"
          >
            Submit
          </Button>
        </div>
        <p id="terms-checkbox-error" className="text-sm text-red-600" role="alert">
          {error}
        </p>
        <p id="terms-checkbox-success" className="text-sm text-green-700" role="status">
          {success}
        </p>
      </div>
    </section>
  );
}
