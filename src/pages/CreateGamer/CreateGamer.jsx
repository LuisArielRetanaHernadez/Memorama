import { useState } from "react";

const CreateGamer = () => {
  const [isPrivate, setIsPrivate] = useState(true)
  const [isOnline, setIsOnline] = useState(true)

  return (
    <div className=" min-h-wrapped-menu grid grid-cols-create-gamer grid-rows-create-gamer justify-center content-center">
      <form className="p-2 rounded-md shadow-2xl bg-neutral-300">
        <div className="">
          <input className="w-full font-semibold text-center border-b border-b-slate-950 p-1 outline-none bg-transparent" placeholder="Titulo"/>
        </div>
        <div className="w-full flex justify-center">
          <input type="number" placeholder="N. Jugadores" max={3}
            className="w-1/2 border border-b-slate-950 p-1 outline-none bg-transparent"
          />
        </div>
        <div>
          <label>
            Online
            <input type="checkbox" value={true} onChange={() => setIsOnline(true)}/>
          </label>
          <label>
            Local
            <input type="checkbox" value={false} onChange={() => setIsOnline(false)}/>
          </label>
        </div>
        {
          isOnline && <div>
            <label>
              Privadad
              <input type="checkbox" value={true} onChange={() => setIsPrivate(true)}/>
            </label>
            <label>
              Publica
              <input type="checkbox" value={false} onChange={() => setIsPrivate(false)}/>
            </label>
          </div>
        }

        {
          isPrivate && <div>
          <input className="w-full font-semibold text-center border-b border-b-slate-950 p-1 outline-none bg-slate-300" placeholder="Contraseña"/>
          <spna>V</spna>
        </div>
        }
        <div>
          <button>Crear</button>
        </div>
      </form>
    </div>
  )
}

export default CreateGamer;