import { Category } from '../types';
import * as Icons from 'lucide-react';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory
}: CategoryFilterProps) {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">
        Browse by Category
      </h2>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            selectedCategory === null
              ? 'bg-cyan-500 text-white shadow-md'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          All Posters
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-cyan-500 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {getIcon(category.icon)}
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
