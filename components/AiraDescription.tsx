// pages/aira-description.js
import { FaCar, FaTrafficLight, FaNetworkWired, FaClock, FaBrain } from 'react-icons/fa';

export default function AiraDescription() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Titre principal */}
                <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-12">
                    AIRA: Artificial Intelligence for Road Automation
                </h1>

                {/* Section : Comment fonctionne AIRA */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                        <FaBrain className="text-blue-600 mr-3" /> Comment fonctionne AIRA ?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                                <FaCar className="text-blue-500 mr-2" /> Analyse des flux
                            </h3>
                            <p className="text-gray-600">
                                AIRA collecte des données en temps réel sur le trafic (véhicules, directions, types) via capteurs et caméras pour analyser la densité à chaque intersection.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                                <FaTrafficLight className="text-blue-500 mr-2" /> Gestion intelligente des feux
                            </h3>
                            <p className="text-gray-600">
                                Les durées des feux sont ajustées dynamiquement selon les flux, priorisant les directions avec le plus de véhicules en attente.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                                <FaNetworkWired className="text-blue-500 mr-2" /> Coordination réseau
                            </h3>
                            <p className="text-gray-600">
                                AIRA coordonne les feux entre intersections pour éviter les bouchons en aval, assurant une fluidité globale.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                                <FaClock className="text-blue-500 mr-2" /> Arrêt et départ optimisés
                            </h3>
                            <p className="text-gray-600">
                                Les véhicules s’arrêtent précisément à la stop_line, s’alignent correctement, et repartent immédiatement au feu vert.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section : Pourquoi AIRA est meilleur */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                        <FaBrain className="text-blue-600 mr-3" /> Pourquoi AIRA est meilleur ?
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">•</span>
                            <p className="text-gray-600">
                                <strong>Adaptabilité :</strong> Ajuste les feux en temps réel, contrairement aux cycles fixes des systèmes classiques.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">•</span>
                            <p className="text-gray-600">
                                <strong>Coordination réseau :</strong> Gère un réseau de feux pour éviter les bouchons en cascade.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">•</span>
                            <p className="text-gray-600">
                                <strong>Réduction des bouchons :</strong> Priorise les directions encombrées tout en équilibrant les flux voisins.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">•</span>
                            <p className="text-gray-600">
                                <strong>Optimisation des arrêts/départs :</strong> Assure des arrêts ordonnés et des départs fluides.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">•</span>
                            <p className="text-gray-600">
                                <strong>Évolutivité :</strong> Peut être déployé sur de petits ou grands réseaux urbains.
                            </p>
                        </li>
                    </ul>
                </section>

                {/* Section : Point fort d’AIRA */}
                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                        <FaNetworkWired className="text-blue-600 mr-3" /> Point fort d’AIRA : Gestion réseau
                    </h2>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                        <p className="text-gray-700">
                            AIRA excelle dans la gestion coordonnée d’un réseau de feux. Par exemple, si une intersection A est encombrée et envoie des véhicules vers une intersection B, AIRA ajuste les feux de B pour absorber ce flux et éviter un bouchon. Cette approche garantit une fluidité globale, même en cas de trafic intense.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}