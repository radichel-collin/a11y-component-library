import Input from "../components/Input";
import Button from "../components/Button";
import { useRef, useState } from "react";

function InputDemo() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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
          required
          errorMessage={error}
          successMessage={success}
          ref={inputRef}
        />
        <div className="mt-6">
          <Button
            onClick={() => {
             if (inputValue.length < 10) {
                setError("Username must be at least 10 characters.")
                inputRef.current?.focus()
                setSuccess("") }
            else {
                setSuccess("Username submitted")
                setError("")
            }
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