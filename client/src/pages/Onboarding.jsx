import { Link } from "react-router-dom";

const Onboarding = () => {
   return (
      <main className="w-full center flex-col text-sm">
         <section className="w-full h-[60vh] bg-blue-500"></section>
         <section className="w-full max-w-2xl h-[40vh] bg-white p-10 pb-20 flex items-start justify-between flex-col">
            <div className="w-full">
               <h1 className="text-xl font-bold">Manage What To Do</h1>
               <p className="text-slate-500 my-2">
                  The best way to manage what you have to do. don't forget your
                  plans
               </p>
            </div>
            <div className="w-full">
               <Link
                  to="/home"
                  className="btn"
               >
                  Get Started
               </Link>
            </div>
         </section>
      </main>
   );
};

export default Onboarding;
