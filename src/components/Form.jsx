function Form() {

   return (
      <form className="flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6">
         

         <div>
            <label htmlFor="full-name-large" className="mb-2 text-slate-900 font-medium text-lg inline-block">Movie name</label>
            <input type="text" id="full-name-large" placeholder="John Smith"
               className="px-3.5 py-3 text-base text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
         </div>

         <div>
            <label htmlFor="full-name-xl" className="mb-2 text-slate-900 font-medium text-lg inline-block">Movie genre</label>
            <input type="text" id="full-name-xl" placeholder="John Smith"
               className="px-4 py-3.5 text-base text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
         </div>

         <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl  bg-blue-400 h-[10vh] pl-10 pt-7">Responsive</button>
         
      </form>
      
   );
}

export default Form; 