import Button from "./components/Button"

function App() {
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
    </main>
  )
}

export default App