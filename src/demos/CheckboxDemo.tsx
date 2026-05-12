import Checkbox from "../components/Checkbox/Checkbox";
import Button from "../components/Button";
import { useState } from "react";

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

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
          errorMessage={error}
          required
        ></Checkbox>
        <Button
          onClick={() => {
            checked
              ? setError("")
              : setError("Please accept the terms and conditions to proceed");
          }}
          variant="primary"
        >
          Submit
        </Button>
        </div>
        {error && (
          <p className="text-sm text-red-500" role="alert">{error}</p>
        )}
      </div>
    </section>
  );
}