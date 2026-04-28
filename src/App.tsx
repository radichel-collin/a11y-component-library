import ButtonDemo from './demos/ButtonDemo'
import InputDemo from './demos/InputDemo'


function App() {

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Component Library
      </h1>
      <ButtonDemo/>
      <InputDemo/>
    </main>
  )
}

export default App