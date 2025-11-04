import Image from "next/image";

export default function Home() {
    return (
        <body>
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-15 text-center text-3xl leading-9 font-extrabold text-orange-500">
                    Créer un nouveaux Compte
                </h2>
                <p className="mt-2 text-center text-sm leading-5 max-w">

                    <a href="/connexion"
                       className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        <u>Ou connectez-vous</u>

                    </a>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form method="POST" action="#">

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="name" name="floating_name" id="floating_name"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Nom </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="name" name="floating_name" id="floating_name"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                               Prénom </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="date" name="date" id="date"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Date de naissance </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" id="email"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="email"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Adresse Email </label>
                        </div>


                        <div className="bg-white p-4 rounded-lg max-w-[350px]">
                            <label className="text-gray-600 text-sm">
                                Phone number
                            </label>
                            <div className="relative mt-2 max-w-xs text-gray-500">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <select className="text-sm outline-none rounded-lg h-full">
                                        <option>FR</option>
                                        <option>US</option>
                                        <option>ES</option>
                                    </select>
                                </div>
                                <input type="number" placeholder="+33"
                                       className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                                Mot de passe
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="password" name="password"
                                       placeholder="12 caractère min ( % & * + - / = ? ^ _ ' ] . )" type="password"
                                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition text-gray-700 duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="password_confirmation"
                                   className="block text-sm font-medium leading-5 text-gray-700">
                                Confirmer mot de passe
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="password_confirmation" name="password_confirmation" placeholder="12 ca. "
                                       type="password"

                                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition text-gray-700 duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                            </div>
                        </div>

                        <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                        <button type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            <a href="/app">Créer un Compte</a>
                        </button>
                    </span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        </body>
    );
}
