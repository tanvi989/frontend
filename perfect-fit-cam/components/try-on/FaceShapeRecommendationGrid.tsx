import { getFaceShapeRecommendation } from '@pf/data/faceShapeRecommendations';
import { Sparkles } from 'lucide-react';

interface FaceShapeRecommendationGridProps {
  faceShape: string;
}

export function FaceShapeRecommendationGrid({ faceShape }: FaceShapeRecommendationGridProps) {
  const rec = getFaceShapeRecommendation(faceShape);
  if (!rec) return null;

  return (
    <div className="w-full max-w-[850px] mt-6">
      <h3 className="text-lg font-bold text-black uppercase tracking-wide mb-3 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-amber-500" />
        Frame recommendations for your face shape
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">Shapes to pick</p>
          <p className="text-sm font-semibold text-gray-900">{rec.shapesToPick}</p>
        </div>
        <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">Why</p>
          <p className="text-sm text-gray-700">{rec.whyPick}</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">Shapes to avoid</p>
          <p className="text-sm font-semibold text-gray-900">{rec.shapesToAvoid}</p>
        </div>
        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">Why</p>
          <p className="text-sm text-gray-700">{rec.whyAvoid}</p>
        </div>
      </div>
    </div>
  );
}
