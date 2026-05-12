import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

function InputDemo() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  return (
    <section aria-labelledby="input-heading">
      <h2
        id="input-heading"
        className="text-xl font-semibold text-gray-700 mt-6 mb-3"
      >
        Input
      </h2>
      <div className="flex flex-wrap items-start gap-4">
        <Input
          id="username"
          label="Username"
          helperText="Minimum 10 characters"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          errorMessage={error}
        />
        <div className="mt-6">
          <Button
            onClick={() => {
              inputValue.length < 10 ?
                setError("Username must be at least 10 characters")
                :
                setError("");
            }}
            variant="primary"
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
}

export default InputDemo;
