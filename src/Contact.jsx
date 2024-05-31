
const Contact = () => {
  return (
    <div className="w-full py-44">
       <div className="lg:w-3/4  mx-auto text-center py-12"><span className="text-gradient font-medium text-2xl">CONTACT ME</span></div>
      <div className="lg:w-3/4 w-full lg:px-0 px-6  mx-auto text-center grid lg:grid-cols-2 gap-4">
        <div className="">
            <input type="text" placeholder="Name" className="rounded-lg bg-transparent px-1 py-2 w-full border-2 border-purple-700"/>
            <input type="text" placeholder="Email" className="rounded-lg bg-transparent px-1 py-2 w-full border-2 border-purple-700"/>
            <input type="text" placeholder="Phone" className="rounded-lg bg-transparent px-1 py-2 w-full border-2 border-purple-700"/>
        </div>
        <div>
            <textarea name="" id="" placeholder="Message"className="rounded-lg bg-transparent px-1 py-2 w-full border-2 border-purple-700"></textarea>
            <button className="w-full py-2 rounded-lg text-white bg-purple-800">Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
