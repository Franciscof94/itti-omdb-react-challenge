import { useParams, useNavigate } from 'react-router-dom';

export const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="mb-4 text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          ← Volver
        </button>
        <h1 className="text-2xl font-bold">Movie Detail</h1>
        <p>Movie ID: {id}</p>
      </div>
    </div>
  );
};
