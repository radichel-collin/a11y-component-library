import ButtonDemo from './demos/ButtonDemo'
import InputDemo from './demos/InputDemo'
import CheckboxDemo from './demos/CheckboxDemo'


function App() {

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        a11y Component Library
      </h1>
      <ButtonDemo />
      <InputDemo />
      <CheckboxDemo />
    </main>
  )
}

export default App