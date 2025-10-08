import { Download, Eye } from 'lucide-react';
import { Poster, Category } from '../types';

interface PosterCardProps {
  poster: Poster;
  category: Category;
  onViewDetails: (poster: Poster) => void;
}

export default function PosterCard({ poster, category, onViewDetails }: PosterCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
        <img
          src={poster.thumbnailUrl}
          alt={poster.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <button
            onClick={() => onViewDetails(poster)}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-4 flex items-center justify-center gap-2 font-medium transition-colors"
          >
            <Eye className="w-5 h-5" />
            View Details
          </button>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">
            {category.name}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
          {poster.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {poster.description}
        </p>
        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            <span>{poster.downloadCount} downloads</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {poster.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
