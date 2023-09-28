import type { TProductDraft } from '../../../types';
import modernGlamDresser from './modern-glam-dresser';
import productDraft from './modern-glam-dresser.spec.json';

describe(`with modernGlamDresser preset`, () => {
  it(`should return a modernGlamDresser preset`, () => {
    const modernGlamDresserPreset = modernGlamDresser().build<TProductDraft>();
    expect(modernGlamDresserPreset).toMatchObject(productDraft);
  });
});
