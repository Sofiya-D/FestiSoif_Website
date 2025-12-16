import { useNavigate } from "react-router-dom";
import { addUser } from "../js/users";
import { useState, useEffect } from "react";


export default function SignupPage() {

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (!name || !email || !password) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const newUser = addUser({ name, email, password });

    navigate("/login");
  };


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); 

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="w-screen h-screen relative bg-gray-100 flex justify-center items-center">
      <img src={"/assets/elipse.png"} alt="elipse" width={120} className="absolute z-0 top-[-3.2rem] left-[-2.2rem]"/>
      <img src={"/assets/stars.png"} alt="stars" width={130} className="absolute z-0 bottom-0 right-[-2.5rem] rotate-x-180"/>
        <div className="flex flex-col gap-6 w-full h-full justify-center items-center">
            <h1 className="text-3xl font-bold mb-12">Créer un compte</h1>
            <div className="w-[80%] gap-6 md:w-[30%] flex flex-col md:gap-4">
              <div className="w-full">
                  <input className="bg-white px-4 py-2 rounded-xl w-full placeholder:text-stone-600 shadow-stone-400 shadow-md" type="text" name="" id="" placeholder="Nom complet" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="w-full">
                  <input className="bg-white px-4 py-2 rounded-xl w-full placeholder:text-stone-600 shadow-stone-400 shadow-md" type="text" name="" id="" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="w-full">
                  <input className="bg-white px-4 py-2 rounded-xl w-full placeholder:text-stone-600 shadow-stone-400 shadow-md" type="password" name="" id="" placeholder="Mot de Passe" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="w-full">
                  <input className="bg-white px-4 py-2 rounded-xl w-full placeholder:text-stone-600 shadow-stone-400 shadow-md" type="password" name="" id="" placeholder="Confirmation de mot de passe"/>
              </div>
            </div>
            <div className="mt-12 w-[80%] gap-4 md:w-[30%] flex flex-col md:gap-2 items-center">
              <div className="w-full"><button className="bg-orange-500 py-2 px-4 text-white rounded-3xl font-semibold w-full cursor-pointer" type="button" onClick={handleSignUp}>Créer mon compte</button></div>
              <p>J'ai déja un compte - <a className="text-blue-500" href="/seconnecter">Se Connecter</a></p>
            </div>
        </div>
    </div>
  );
}
