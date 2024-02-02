import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CreateGamer = () => {
  const [isPrivate, setIsPrivate] = useState(true)
  const [isOnline, setIsOnline] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className=" min-h-wrapped-menu grid grid-cols-create-gamer grid-rows-create-gamer justify-center content-center">
      <form className="p-2 rounded-md shadow-2xl bg-neutral-300 flex flex-col justify-between">
        <div className="">
          <input className="w-full font-semibold text-center border-b border-b-slate-400 p-1 outline-none bg-transparent" placeholder="Titulo"/>
        </div>
        <div className="w-full flex justify-center">
          <input type="number" placeholder="N. Jugadores" max={3}
            className="w-1/2 border border-b-slate-400 p-1 outline-none bg-transparent"
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
            className={`p-1 rounded-xl shadow-2xl ${isPrivate ? "bg-sky-950" : "bg-sky-400"} bg-slate-400 inline-flex cursor-pointer`}
            >
              Privadad
              <input id="private" type="checkbox" value={true} onChange={() => setIsPrivate(true)}
                className="hidden"
              />
            </label>
            <label htmlFor="public"
            className={`p-1 rounded-xl shadow-2xl ${isPrivate ? "bg-sky-400" : "bg-sky-950"} bg-slate-400 inline-flex cursor-pointer`}
            >
              Publica
              <input id="public" type="checkbox" value={false} onChange={() => setIsPrivate(false)}
                className="hidden"
              />
            </label>
          </div>
        }

        {
          isPrivate && <div className="flex gap-3">
          <input
          type={showPassword ? "text": "password"}
           className="w-full font-semibold text-center border-b border-b-slate-400 p-1 outline-none bg-transparent" placeholder="Contraseña"/>
          <span onClick={() =>  setShowPassword(prev => !prev)} className="text-blue-800 p-2 rounded-xl cursor-pointer">
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </span>
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