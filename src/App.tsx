import Button from "./components/Button"
import Input from "./components/Input"
import { useState } from 'react'


function App() {

const [inputValue, setInputValue] = useState('')
const [error, setError] = useState('')

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Component Library
      </h1>

      <section aria-labelledby="button-heading">
        <h2 id="button-heading" className="text-xl font-semibold text-gray-700 mb-4">
          Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
      <section aria-labelledby="input-heading">
        <h2 id="input-heading" className="text-xl font-semibold text-gray-700 mb-4">
          Input
        </h2>
        <div className="flex flex-wrap items-start gap-4">
          <Input
          id="username"
          label="Username"
          helperText="Minimum 10 characters"
          value = {inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          errorMessage={error}
          />
          <Button
          className="mt-6"
          onClick={() => {
            if (inputValue.length < 10) {
              setError('Username must be at least 10 characters')
            } else {
              setError('')
            }
          }}
          variant="primary"
          >
            Submit
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App