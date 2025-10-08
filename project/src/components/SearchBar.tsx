import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search posters by title, description, or tags..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent shadow-sm text-slate-900 placeholder-slate-400"
      />
    </div>
  );
}
