import { X, Download, Tag, Calendar } from 'lucide-react';
import { Poster, Category } from '../types';

interface PosterModalProps {
  poster: Poster;
  category: Category;
  onClose: () => void;
}

export default function PosterModal({ poster, category, onClose }: PosterModalProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = poster.imageUrl;
    link.download = `${poster.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-slate-900">{poster.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg bg-slate-100">
                <img
                  src={poster.imageUrl}
                  alt={poster.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={handleDownload}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Poster
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-lg mb-4">
                  {category.name}
                </span>
                <p className="text-slate-700 leading-relaxed">
                  {poster.description}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Published</p>
                    <p className="text-sm text-slate-600">
                      {new Date(poster.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Download className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Downloads</p>
                    <p className="text-sm text-slate-600">{poster.downloadCount} times</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 mb-2">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {poster.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                <h3 className="font-semibold text-cyan-900 mb-2">Usage Guidelines</h3>
                <ul className="text-sm text-cyan-800 space-y-1">
                  <li>• Free for educational and non-commercial use</li>
                  <li>• Print in high quality for office or classroom display</li>
                  <li>• Share with colleagues to promote security awareness</li>
                  <li>• Attribution appreciated but not required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
