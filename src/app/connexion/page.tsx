import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-screen bg-orange-500">
            <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
                <header className="flex justify-center items-center h-20">
                    < Image
                        width={50}
                        src="/Logo.png"
                        height={50}
                        className="flex items-center"
                    />


                </header>

                <form>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="username">Nom d'utilisateur</label>
                        <input
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            type="text" name="username" placeholder="écrivez votre nom d'utilisateur?"/>
                    </div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="password">Mot de passe</label>
                        <input
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            type="password" name="password" placeholder="écrivez votre mot de passe?"/>
                    </div>

                    <div>
                        <a
                            href="/pagedeconnexion"
                            className="text-white bg-indigo-600 py-1.5 px-4 rounded w-full block text-center"
                        >
                            Se connecter
                        </a>
                    </div>


                </form>


                <footer>
                    <a className="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Mot de passe oublié?</a>

                    <a     href="/creeruncompte"
                           className="text-indigo-700 hover:text-pink-700 text-sm float-right" >Créer un compte
                    </a>
                </footer>
            </div>
        </div>
    );
}
