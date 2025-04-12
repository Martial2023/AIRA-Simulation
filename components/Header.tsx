// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Header = () => {
//   return (
//     <header className="shadow-sm mb-6">
//       {/* Navbar supérieur avec logo et slogan */}
//       <div className="container mx-auto flex justify-between items-center py-5 px-6">
//         <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
//           <div className="relative">
//             <Image
//               src="/images/logo.jpg"
//               alt="AIVerse Logo"
//               width={48}
//               height={48}
//               className="rounded-md shadow-sm"
//             />
//           </div>
//           <h2 className="font-medium text-gray-800 text-2xl">AIVerse</h2>
//         </Link>

//         <p className="text-sm text-gray-600 italic hidden md:block">
//           Nos villes sans embouteillage, un Bénin plus fluide
//         </p>

//         <nav className="space-x-6">
//           <Link
//             href="/explore"
//             className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
//           >
//             Fonctionnement
//           </Link>

//           <Link
//             href="/stages"
//             className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
//           >
//             Étapes
//           </Link>

//           <Link
//             href="/aira"
//             className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
//           >
//             AIRA
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Car, MapPin, Info, BarChart3, Bot } from 'lucide-react';

const Header = () => {
    return (
        <header className="shadow-sm mb-6">
            {/* Navbar supérieur avec logo et slogan */}
            <div className="container mx-auto flex justify-between items-center py-5 px-6">
                <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
                    <div className="relative">
                        <Image
                            src="/images/logo.jpg"
                            alt="AIVerse Logo"
                            width={48}
                            height={48}
                            className="rounded-md shadow-sm"
                        />
                    </div>
                    <h2 className="font-medium text-gray-800 text-2xl">AIVerse</h2>
                </Link>

                <div className="items-center gap-2 text-sm text-gray-600 italic hidden md:flex">
                    <Car size={18} className="text-blue-500" />
                    <p>Nos villes sans embouteillage, un Bénin plus fluide</p>
                </div>

                <nav className="space-x-6 flex items-center">
                    <Link
                        href="/#running"
                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-2"
                    >
                        <BarChart3 size={16} />
                        <span>Fonctionnement</span>
                    </Link>

                    <Link
                        href="/explore"
                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-2"
                    >
                        <MapPin size={16} />
                        <span>Étapes</span>
                    </Link>

                    <Link
                        href="/explore"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                        <Bot size={16} />
                        <span>AIRA</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;