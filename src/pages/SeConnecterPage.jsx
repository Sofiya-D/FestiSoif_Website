import google from "../assets/img/google.png";
import facebook from "../assets/img/facebook.png";

export default function SeConnecterPage() {

  return (
    <div className="w-screen h-screen relative bg-gray-200 flex justify-center items-center">
        <div className="flex flex-col gap-6 w-full h-full justify-center items-center">
            <h1 className="text-3xl font-extrabold mb-12 text-left w-[80%] md:w-[30%]">Se connecter</h1>
            <div className="w-[80%] gap-6 md:w-[30%] flex flex-col md:gap-4">
              <div className="w-full">
                  <label className="text-lg font-bold mb-2">Email</label>
                  <input className="py-2 w-full placeholder:text-stone-600 border-b border-stone-600 focus:outline-none" type="text" name="" id="" placeholder="Entrer l'email"/>
              </div>
              <div className="w-full">
                <label className="text-lg font-bold mb-2">Mot de passe</label>
                  <input className="py-2 w-full placeholder:text-stone-600 border-b border-stone-600 focus:outline-none" type="text" name="" id="" placeholder="Entrer le mot de passe"/>
              </div>
              <div className="w-full">
                <a href="">Mot de passe oublié?</a>
              </div>
              <div className="w-full"><button className="bg-orange-500 py-2 px-4 text-white rounded-3xl font-semibold w-full" type="button">Se connecter</button></div>
            </div>
            <div className="w-[80%] md:w-[30%] flex flex-col gap-2 items-center">
              <h2 className="text-sm text-stone-700 font-extrabold text-left w-full">Social Logins</h2>
              <div className="w-full"><button className="border border-stone-700 py-2 px-4 text-stone-800 rounded-3xl font-semibold w-full flex justify-center gap-4 items-center content-center" type="button"><img src={google} alt="google" width={20}/> <p>Continuer avec Google</p></button></div>
              <div className="w-full"><button className="border border-stone-700 py-2 px-4 text-stone-800 rounded-3xl font-semibold w-full flex justify-center gap-4 items-center content-center" type="button"><img src={facebook} alt="facebook" width={20}/> Continuer avec Facebook</button></div>
              <p className="mt-4">Pas de compte ? <a className="text-blue-500" href="/signup">Créer un compte</a></p>
            </div>
        </div>
    </div>
  );
}
