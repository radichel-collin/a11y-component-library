import Button from "../components/Button"


function ButtonDemo() {
    return (
    
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
    )
}

export default ButtonDemo;