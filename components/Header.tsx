// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Header = () => {
//     return (
//         <div className="">
//             <div className="flex justify-between items-center p-8 px-[10%] bg-white">
//                 <div className="flex items-center gap-2">
//                     <Image
//                         src="/images/logo.jpg"
//                         alt="Logo"
//                         width={50}
//                         height={50}
//                         className="rounded-sm"
//                     />
//                     <h2 className="font-medium text-gray-800 text-2xl">AIVerse</h2>
//                 </div>

//                 <div className="text-sm text-gray-600">
//                     Nos villes sans embouteillage, un Bénin plus fluide
//                 </div>
//             </div>
//             <div className="px-4 py-6 flex items-center justify-center">
//                 <h1 className="text-4xl font-semibold text-gray-900 text-center">Simulation du trafic</h1>
//             </div>

//             <div className="px-4 py-6 flex items-center justify-center bg-red-400 rounded-lg shadow-md border border-red-300 ">
//                 <p className='text-center'>
//                     Ceci est un apperçu de la simulation du système.
//                     Pour les étapes de sa réalisation en condition réelle, consulter
//                     <Link
//                         href={"/explore"}
//                         className="text-blue-500 hover:underline font-semibold"
//                     >
//                         AIRA
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Header;

import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="shadow-sm">
            {/* Section Logo et slogan */}
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center gap-3">
                    <Image
                        src="/images/logo.jpg"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-md shadow-sm"
                    />
                    <h2 className="font-medium text-gray-800 text-2xl">AIVerse</h2>
                </div>

                <div className="text-sm text-gray-500 italic font-light">
                    Nos villes sans embouteillage, un Bénin plus fluide
                </div>
            </div>

            {/* Section Titre */}
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-semibold text-gray-800 text-center">
                    Simulation du trafic
                </h1>
            </div>

        </header>
    );
};

export default Header;