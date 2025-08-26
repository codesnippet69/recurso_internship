import { useState, useCallback, useEffect } from 'react'




function PassApp(){
const [password, setPassword]= useState("")
const [charAllowed, setChar]= useState(false)
const [numberAllowed, setNumber]=useState(false)
const [length,setLength]=useState(8)


const passwordGen = useCallback(()=>{
  let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberAllowed){
  str+="123456789";
}
if(charAllowed){
  str+="?@#{}";
}
for (let index = 1; index<=length; index++) {
let char=Math.floor(Math.random()*str.length+1)
pass+=str.charAt(char)
}
setPassword(pass)

},[charAllowed,numberAllowed,length])

useEffect(()=>{passwordGen()},[charAllowed,numberAllowed,length,passwordGen])
return(
<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
  <div className="w-full max-w-xl bg-white border border-gray-100 rounded-xl shadow p-6">
    <header className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900">Password Generator</h1>
    </header>

    <div className="space-y-5">
      <div>
        <input
          type="text"
          value={password}
          readOnly
          className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 font-mono text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Length: {length}</label>
        <input
          type="range"
          min={8}
          max={100}
          value={length}
          className="w-full cursor-pointer accent-blue-600"
          onChange={(e)=>{setLength(Number(e.target.value))}} />
      </div>

      <div className="flex items-center gap-6">
        <label htmlFor="numbercheck" className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            name="numbers"
            id="numbercheck"
            checked={numberAllowed}
            onChange={() => setNumber(prev => !prev)}
            className="size-4 accent-blue-600"
          />
          <span className="text-sm text-gray-700">Include numbers</span>
        </label>

        <label htmlFor="charcheckbox" className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            name="chars"
            id="charcheckbox"
            checked={charAllowed}
            onChange={() => setChar(prev => !prev)}
            className="size-4 accent-blue-600"
          />
          <span className="text-sm text-gray-700">Include symbols</span>
        </label>
      </div>
    </div>
  </div>
</div>
)
}

export default PassApp

