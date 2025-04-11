import Link from 'next/link';
import TrafficSimulation from '../components/TrafficSimulation';

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-6 pb-6">
        <div className="bg-gradient-to-r from-amber-50 to-red-50 p-4 rounded-lg  border border-red-100">
          <p className="text-center text-gray-700">
            Ceci est un aperçu de la simulation du système.
            Pour les étapes de sa réalisation en condition réelle, consulter{' '}
            <Link
              href="/explore"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              AIRA
            </Link>
          </p>
        </div>
      </div>

      <TrafficSimulation />
    </main>
  );
}
