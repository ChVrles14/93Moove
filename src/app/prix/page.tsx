import Image from "next/image";

export default function Home() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">


                <div id="pricing" className="py-20 md:px-20 lg:px-20">
                    <div className="container mx-auto px-4">
                        <div className="mb-12 text-center">
                            <h3 className="text-white-400" data-aos="fade-down">Les prix</h3>
                            <h2 className="text-white text-[30px] font-bold" data-aos="fade-down">
                                Choisissez votre plan préféré
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-white-400" data-aos="fade-down">
                             en fonction de votre budget
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <div className="relative bg-[#FFFFFF] border-gray-800 p-6 rounded-xl">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-orange-500">
                                        Le pack basique
                                    </h3>
                                    <div className="mt-4 text-center">
            <span className="text-4xl text-orange-500 font-bold">
              5€
            </span>
                                        <span className="text-orange-500">/session</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <ul className="mb-8 space-y-4">
                                        <li className="flex items-center">
                                            <svg className="mr-2 h-5 w-5 text-purple-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                            <span className="text-orange-500">2H du sport de votre choix</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="mr-2 h-5 w-5 text-purple-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                            <span className="text-orange-500">Vous serez accompagné par nos animateurs expérimentés </span>
                                        </li>
                                    </ul>
                                    <span
                                        className="cursor-pointer w-full py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-orange-500 to-orange-700 shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
                                    >
            Choisir le plan
          </span>
                                </div>
                            </div>

                            <div
                                className="relative bg-violet-900/20 backdrop-blur-lg rounded-2xl border-2 border-orange-50 hover:transform hover:-translate-y-2 transition-all duration-300">
                                <div
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-600 px-3 py-1 text-white text-sm font-semibold">
                                    Most Popular
                                </div>
                                <div className="text-center p-6">
                                    <h3 className="text-2xl font-bold text-white">
                                        Le pack Premium
                                    </h3>
                                    <div className="mt-4 text-center">
            <span className="text-4xl text-orange-400-400 font-bold">
              15€
            </span>
                                        <span className="text-white">/session</span>
                                    </div>
                                </div>
                                <div className="px-4 pb-8">
                                    <ul className="mb-8 space-y-4">
                                        <li className="flex items-center">
                                            <svg className="mr-2 h-5 w-5 text-purple-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                            <span className="text-white">4H - 2 sports au choix dans une meme session</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="mr-2 h-5 w-5 text-purple-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                            <span className="text-white">Accompagnement personnalisé par nos animateurs</span>
                                        </li>

                                        <li className="flex items-center">
                                            <svg className="mr-2 h-5 w-5 text-purple-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                            <span className="text-white">Inscription en ligne</span>
                                        </li>
                                    </ul>
                                    <span
                                        className="cursor-pointer w-full py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
                                    >
            Choisir le plan
          </span>
                                </div>
                            </div>

                            <div className="relative bg-[#1A1A1A] border-gray-800 p-6 rounded-xl">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white">
                                        Pour le passionné
                                    </h3>
                                    <div className="mt-4 text-center">
                                        <span className="text-2xl text-white font-bold line-through">120€
            </span>
                                        &nbsp;&nbsp;
            <span className="text-3xl text-orange-400 font-bold">
              60€
            </span>
                                        <span className="text-gray-400">/mois</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <ul className="mb-8 space-y-4">
                                        <li className="flex items-center">
                                            <svg className="mr-2 h-5 w-5 text-purple-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                            <span className="text-white">Sessions illimité au sport de votre choix</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="mr-2 h-5 w-5 text-purple-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                            <span className="text-white">Accompagnement personnalisé par nos animateurs</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="mr-2 h-5 w-5 text-purple-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                            <span className="text-white">Inscription en ligne</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="mr-2 h-5 w-5 text-purple-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                            <span className="text-white">Boissons gratuites</span>
                                        </li>
                                    </ul>
                                    <span
                                        className="cursor-pointer w-full py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
                                    >
            Choisir le plan
          </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
