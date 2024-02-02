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
        <div className="mt-2 flex justify-center gap-6">
          <label htmlFor="online"
          className="p-1 rounded-xl shadow-2xl bg-slate-400 inline-flex cursor-pointer"
          >
            Online
            <input id="online" type="checkbox" value={true} onChange={() => setIsOnline(true)}
              className="hidden"
            />
          </label>
          <label htmlFor="local"
          className="p-1 rounded-xl shadow-2xl bg-slate-400 inline-flex cursor-pointer"
          >
            Local
            <input id="local" type="checkbox" value={false} onChange={() => setIsOnline(false)}
              className="hidden"
            />
          </label>
        </div>
        {
          isOnline && <div className="mt-2 flex justify-center gap-6">
            <label htmlFor="private"
            className="p-1 rounded-xl shadow-2xl bg-slate-400 inline-flex cursor-pointer"
            >
              Privadad
              <input id="private" type="checkbox" value={true} onChange={() => setIsPrivate(true)}
                className="hidden"
              />
            </label>
            <label htmlFor="local"
            className="p-1 rounded-xl shadow-2xl bg-slate-400 inline-flex cursor-pointer"
            >
              Publica
              <input id="local" type="checkbox" value={false} onChange={() => setIsPrivate(false)}
                className="hidden"
              />
            </label>
          </div>
        }

        {
          isPrivate && <div className="flex gap-3">
          <input className="w-full font-semibold text-center border-b border-b-slate-950 p-1 outline-none bg-transparent" placeholder="Contraseña"/>
          <span className=" bg-blue-200 text-blue-800 p-2 rounded-xl">V</span>
        </div>
        }
        <div className="w-full flex justify-center">
          <button
          className="m-auto px-3 py-2 font-semibold text-gray-50 rounded-xl bg-sky-950"
          >Crear</button>
        </div>
      </form>
    </div>
  )
}

export default CreateGamer;