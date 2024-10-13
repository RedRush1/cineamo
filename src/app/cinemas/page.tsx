import { fetchCinemas } from '@/services/api';
import { Cinema } from '@/model';

export default async function CinemasPage() {
  const cinemas: Cinema[] = await fetchCinemas();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cinemas</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cinemas.map((cinema) => (
          <div key={cinema.name} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{cinema.name}</h2>
            <img src={cinema.profileImageUrl} alt={cinema.name} className="w-full h-40 object-cover mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}