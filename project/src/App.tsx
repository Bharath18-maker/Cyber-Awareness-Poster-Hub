import { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import PosterCard from './components/PosterCard';
import PosterModal from './components/PosterModal';
import { categories, posters } from './data';
import { Poster } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);

  const filteredPosters = useMemo(() => {
    return posters.filter(poster => {
      const matchesCategory = !selectedCategory || poster.categoryId === selectedCategory;

      const matchesSearch = !searchQuery ||
        poster.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poster.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poster.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const selectedCategoryData = selectedCategory
    ? categories.find(cat => cat.id === selectedCategory)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Cybersecurity Education Posters
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Download free, high-quality infographics and posters to promote cybersecurity
            awareness in your organization. Perfect for offices, classrooms, and training materials.
          </p>
        </div>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {selectedCategoryData && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {selectedCategoryData.name}
            </h3>
            <p className="text-slate-600">{selectedCategoryData.description}</p>
          </div>
        )}

        {filteredPosters.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-slate-500">
              No posters found. Try adjusting your filters or search query.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-sm text-slate-600">
              Showing {filteredPosters.length} poster{filteredPosters.length !== 1 ? 's' : ''}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPosters.map(poster => {
                const category = categories.find(cat => cat.id === poster.categoryId);
                return category ? (
                  <PosterCard
                    key={poster.id}
                    poster={poster}
                    category={category}
                    onViewDetails={setSelectedPoster}
                  />
                ) : null;
              })}
            </div>
          </>
        )}
      </main>

      {selectedPoster && (
        <PosterModal
          poster={selectedPoster}
          category={categories.find(cat => cat.id === selectedPoster.categoryId)!}
          onClose={() => setSelectedPoster(null)}
        />
      )}

      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-slate-400">
              © 2024 Cyber Awareness Hub. All posters are free for educational use.
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Help spread cybersecurity awareness by sharing these resources with your community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
