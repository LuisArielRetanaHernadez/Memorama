const Search = () => {

  return (
    <div className="w-full">
      <form className="w-full">
        <div className="w-full flex">
          <input className="mr-2 border rounded-md p-1 flex-grow " type="text" placeholder="Search" />
          <button className="border rounded-md p-1 bg-white flex-grow-0" type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search