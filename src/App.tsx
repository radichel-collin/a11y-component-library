import ButtonDemo from './demos/ButtonDemo'
import InputDemo from './demos/InputDemo'
import CheckboxDemo from './demos/CheckboxDemo'
import CheckboxGroupDemo from './demos/CheckboxGroupDemo'


function App() {

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        a11y Component Library Demos
      </h1>
      <ButtonDemo />
      <InputDemo />
      <CheckboxDemo />
      <CheckboxGroupDemo />
    </main>
  )
}

export default App