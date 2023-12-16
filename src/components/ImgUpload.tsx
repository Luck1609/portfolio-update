

export default function ImgUpload() {
  return (
    <div className="flex items-center">
      <div className="shrink-0">
        <img className="h-10 w-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
      </div>
      <label className="border-none">
        <span className="sr-only">Choose profile photo</span>
        <input type="file" className="inline-block text-sm
          file:py-2
          file:rounded file:border
          file:text-sm file:font-semibold
          file:border-slate-50 file:text-primary
          file:w-full
          hover:file:bg-sky-100
          file:bg-transparent
        "/>
      </label>
    </div>
  )
}
