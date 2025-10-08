import { Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500 p-2 rounded-lg">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Cyber Awareness Hub
              </h1>
              <p className="text-slate-300 text-sm mt-1">
                Educational resources for cybersecurity awareness
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
