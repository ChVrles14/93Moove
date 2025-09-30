import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  return (
      <div
          className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
              <h1>93Moove</h1>


              <div className="flex gap-4 items-center flex-col sm:flex-row">
                  <p>Bienvenue a toutes et a tous sur notre site qui vous accueille à bras ouverts et vous propose de
                      faire une activité physique régulière ou occasionel
                      vous pourrez vous inscrire sur notre site ou notre application à des cours et vous pourrez choisir
                      parmi notre large catalogue d'activités.</p>

              </div>
              < Image
                  aria-hidden
                  src="/Sport.png"
                  alt="logo"
                  width={500}
                  height={500}
                  border-radius={500}
              />
              <section>
                  <h2 className="text-2xl font-bold mb-6 border-l-4 border-white pl-3">Les activités vedettes</h2>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

                      <div
                          className="relative group bg-[#1c1c1c] rounded-4xl overflow-hidden shadow hover:shadow-lg transition">
                          <img src="Handball.png" alt="Handball"
                               className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"/>
                          <div
                              className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                              <button className="bg-orange-500 px-4 py-2 rounded-xl text-sm hover:bg-orange-700">S'inscrire
                              </button>
                          </div>
                          <div className="p-2">
                              <h3 className="text-sm font-semibold truncate">Handball</h3>
                          </div>
                      </div>

                      <div
                          className="relative group bg-[#1c1c1c] rounded-4xl overflow-hidden shadow hover:shadow-lg transition">
                          <img src="foot.png" alt="foot"
                               className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"/>
                          <div
                              className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                              <button className="bg-orange-500 px-4 py-2 rounded-xl text-sm hover:bg-orange-700">S'inscrire
                              </button>
                          </div>
                          <div className="p-2">
                              <h3 className="text-sm font-semibold truncate">Football</h3>
                          </div>
                      </div>

                      <div
                          className="relative group bg-[#1c1c1c] rounded-4xl overflow-hidden shadow hover:shadow-lg transition">
                          <img src="natation.png" alt="natation"
                               className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"/>
                          <div
                              className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                              <button className="bg-orange-500 px-4 py-2 rounded-xl text-sm hover:bg-orange-700">S'inscrire
                              </button>
                          </div>
                          <div className="p-2">
                              <h3 className="text-sm font-semibold truncate">Natation</h3>
                          </div>
                      </div>

                      <div
                          className="relative group bg-[#1c1c1c] rounded-4xl overflow-hidden shadow hover:shadow-lg transition">
                          <img src="basket.png" alt="basket"
                               className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"/>
                          <div
                              className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                              <button className="bg-orange-500 px-4 py-2 rounded-xl text-sm hover:bg-orange-700">S'inscrire
                              </button>
                          </div>
                          <div className="p-2">
                              <h3 className="text-sm font-semibold truncate">Basketball</h3>
                          </div>
                      </div>

                      <div
                          className="relative group bg-[#1c1c1c] rounded-4xl overflow-hidden shadow hover:shadow-lg transition">
                          <img src="boxe.png" alt="Boxe"
                               className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"/>
                          <div
                              className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                              <button className="bg-orange-500 px-4 py-2 rounded-xl text-sm hover:bg-orange-700">S'inscrire
                              </button>
                          </div>
                          <div className="p-2">
                              <h3 className="text-sm font-semibold truncate">Boxe</h3>
                          </div>
                      </div>

                      <div
                          className="relative group bg-[#1c1c1c] rounded-4xl overflow-hidden shadow hover:shadow-lg transition">
                          <img src="judo.png" alt="judo"
                               className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"/>
                          <div
                              className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                              <button className="bg-orange-500 px-4 py-2 rounded-xl text-sm hover:bg-orange-700">S'inscrire
                              </button>
                          </div>
                          <div className="p-2">
                              <h3 className="text-sm font-semibold truncate">judo</h3>
                          </div>
                      </div>

                  </div>
              </section>
          </main>

      </div>


  );
}
