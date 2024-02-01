const CreateGamer = () => {

  return (
    <div className="bg-blue-700 grid grid-cols-create-gamer grid-rows-create-gamer justify-center">
      <form className="p-2 rounded-md bg-slate-300">
        <div>
          <input placeholder="Titulo"/>
        </div>
        <div>
          <input type="number" placeholder="N. Jugadores" max={3}/>
        </div>
        <div>
          <label>
            Privadad
            <input type="checkbox" value={true}/>
          </label>
          <label>
            Publica
            <input type="checkbox" value={false}/>
          </label>
        </div>
        <div>
          <button>Crear</button>
        </div>
      </form>
    </div>
  )
}

export default CreateGamer;