import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-orange-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg"
                     alt="Workflow"/>
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Créer un nouveaux Compte
                </h2>
                <p className="mt-2 text-center text-sm leading-5 max-w">

                    <a href="#login"
                       className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        Ou connectez-vous

                    </a>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form method="POST" action="#">
                        <div>
                            <label htmlFor="name"
                                   className="block text-sm font-medium leading-5  text-gray-700">Nom</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input id="name" name="name" placeholder="Doe" type="text" required=""
                                       className="appearance-none block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>

                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="name"
                                   className="block text-sm font-medium leading-5  text-gray-700">Prénom</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input id="name" name="name" placeholder="John" type="text" required=""
                                       className="appearance-none block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>

                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                                Adresse E-mail
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input id="email" name="email" placeholder="user@gmail.com" type="email"
                                       required=""
                                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition text-gray-700 duration-150 ease-in-out sm:text-sm sm:leading-5"/>

                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                                Mot de passe
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="password" name="password" placeholder="12 caractère min ( % & * + - / = ? ^ _ ' ] . )" type="password" required=""
                                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition text-gray-700 duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="password_confirmation"
                                   className="block text-sm font-medium leading-5 text-gray-700">
                                Confirmer mot de passe
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="password_confirmation" name="password_confirmation" placeholder="12 ca. " type="password"
                                       required=""
                                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition text-gray-700 duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                            </div>
                        </div>

                        <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                        <button type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            Créer un Compte
                        </button>
                    </span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
