/**
 * Frame recommendations by face shape for multifocal/progressive wearers.
 * 2x2 grid: Shapes to Pick | Why | Shapes to Avoid | Why
 */
export interface FaceShapeRecommendation {
  shapesToPick: string;
  whyPick: string;
  shapesToAvoid: string;
  whyAvoid: string;
}

const recommendations: Record<string, FaceShapeRecommendation> = {
  oval: {
    shapesToPick: 'Rectangle, Semi square, Square, Hexagon',
    whyPick: 'Adds structure for multifocal lens height. Creates a sharp premium style contrast.',
    shapesToAvoid: 'Round, Small Round',
    whyAvoid: 'Reduces lens depth. Weak for multifocals.',
  },
  square: {
    shapesToPick: 'Round, Oval, Cateye',
    whyPick: 'Softens angles, enables comfortable multifocal viewing zones. Balances jawline with elegant lift.',
    shapesToAvoid: 'Square, Heavy Frames',
    whyAvoid: 'Over-angular. Visually harsh.',
  },
  round: {
    shapesToPick: 'Rectangle, Square, Cateye, Hexagon',
    whyPick: 'Adds definition and supports wider reading area. Creates authority and face length.',
    shapesToAvoid: 'Round, Tiny Shapes',
    whyAvoid: 'Crowds progressive corridor.',
  },
  rectangle: {
    shapesToPick: 'Round, Aviator, Square, Cateye',
    whyPick: 'Reduces face length; deeper lenses aid multifocals. Adds width and visual balance.',
    shapesToAvoid: 'Narrow frames',
    whyAvoid: 'Limits lens progression space.',
  },
  heart: {
    shapesToPick: 'Oval, Cateye, Round, Aviator, Wayfarer',
    whyPick: 'Balances forehead for stable multifocal fit. Adds lower-face width for harmony.',
    shapesToAvoid: 'Top-heavy frames',
    whyAvoid: 'Shifts focus upward. Unstable look.',
  },
};

export function getFaceShapeRecommendation(faceShape: string | undefined): FaceShapeRecommendation | null {
  if (!faceShape || !faceShape.trim()) return null;
  const key = faceShape.trim().toLowerCase();
  return recommendations[key] ?? null;
}

export { recommendations };
