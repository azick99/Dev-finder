const Features = () => {
  return (
    <section id="features" className="grid grid-cols-2 gap-x-1">
      <form>
        <div className="flex">
          <input
            type="text"
            className="py-3 pl-10 pr-4 w-[30rem] rounded-lg"
            placeholder="Search GitHub username"
          />
          <button type="submit" className="py-4 px-6 bg-light-blue rounded-lg">Search</button>
        </div>
      </form>
    </section>
  )
}

export default Features
