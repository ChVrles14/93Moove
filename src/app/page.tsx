import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1>93Moove</h1>


        <div className="flex gap-4 items-center flex-col sm:flex-row">
            <p>Bienvenue a toutes et a tous sur notre site qui vous accueille à bras ouverts et vous propose de faire une activité physique régulière ou occasionel
                vous pourrez vous inscrire sur notre site ou notre application à des cours et vous pourrez choisir parmi notre large catalogue d'activités.</p>




        </div>
          < Image
          aria-hidden
          src="/Sport.png"
          alt="logo"
          width={500}
          height={500}
          border-radius={500}
      />
      </main>
    </div>
  );
}
