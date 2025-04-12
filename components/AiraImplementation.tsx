// pages/aira-implementation.js
import { FaCamera, FaServer, FaRobot, FaNetworkWired, FaClock } from 'react-icons/fa';

export default function AiraImplementation() {
    return (
        <div className="min-h-screen  py-12 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Titre principal */}
                <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-12">
                    Mise en place d’AIRA en conditions réelles
                </h1>

                {/* Section : Étape 1 - Installation du matériel */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                        <FaCamera className="text-blue-600 mr-3" /> Étape 1 : Installation du matériel
                    </h2>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <p className="text-gray-600">
                                    <strong>Caméras haute résolution :</strong> Installées sur chaque axe (droite, gauche, haut, bas) pour capturer les flux vidéo en temps réel.
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <p className="text-gray-600">
                                    <strong>Capteurs environnementaux :</strong> Mesurent les conditions météo (pluie, brouillard) et la luminosité (jour/nuit).
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <p className="text-gray-600">
                                    <strong>Réseau de communication :</strong> Connexion via 4G/5G ou fibre optique pour transmettre les données au serveur central.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Section : Étape 2 - Détection des flux avec YOLOv8 */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                        <FaRobot className="text-blue-600 mr-3" /> Étape 2 : Détection des flux avec YOLOv8
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                                <FaCamera className="text-blue-500 mr-2" /> Entraînement de YOLOv8
                            </h3>
                            <p className="text-gray-600">
                                YOLOv8 est entraîné sur des vidéos annotées pour détecter et classer les véhicules (voitures, bus, vélos, etc.) dans chaque direction.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                                <FaServer className="text-blue-500 mr-2" /> Estimation de la densité
                            </h3>
                            <p className="text-gray-600">
                                YOLOv8 compte les véhicules sur chaque axe et calcule la densité de trafic (par exemple, 10 voitures à droite, 5 en bas).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section : Étape 3 - Prise de décision avec Random Forest */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                        <FaRobot className="text-blue-600 mr-3" /> Étape 3 : Prise de décision avec Random Forest
                    </h2>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <p className="text-gray-600">
                                    <strong>Données d’entrée :</strong> Densités de trafic, densités des intersections voisines, météo, jour, période de la journée, événements spéciaux.
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <p className="text-gray-600">
                                    <strong>Entraînement :</strong> Random Forest est entraîné sur des données historiques pour prédire les durées optimales des feux et l’ordre des phases.
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <p className="text-gray-600">
                                    <strong>Prédiction :</strong> Prédit les durées des feux (vert, jaune, rouge) et l’ordre des phases pour chaque intersection.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Section : Étape 4 - Mise en œuvre et coordination */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                        <FaNetworkWired className="text-blue-600 mr-3" /> Étape 4 : Mise en œuvre et coordination
                    </h2>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <p className="text-gray-600">
                                    <strong>Communication :</strong> Les durées et phases prédites sont envoyées aux contrôleurs des feux via le réseau.
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <p className="text-gray-600">
                                    <strong>Coordination réseau :</strong> AIRA ajuste les feux des intersections voisines pour éviter les bouchons en cascade.
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <p className="text-gray-600">
                                    <strong>Gestion des véhicules :</strong> Arrêt ordonné à la stop_line, alignement des véhicules, départ fluide au feu vert.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Section : Étape 5 - Surveillance et amélioration */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                        <FaClock className="text-blue-600 mr-3" /> Étape 5 : Surveillance et amélioration
                    </h2>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <p className="text-gray-600">
                                    <strong>Monitoring :</strong> Tableau de bord affichant les densités, durées des feux, et temps de trajet moyens.
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <p className="text-gray-600">
                                    <strong>Amélioration continue :</strong> Réentraînement des modèles YOLOv8 et Random Forest avec les nouvelles données collectées.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}