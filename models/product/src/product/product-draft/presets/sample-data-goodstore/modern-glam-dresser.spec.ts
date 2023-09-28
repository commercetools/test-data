import type { TProductDraft } from '../../../types';
import modernGlamDresser from './modern-glam-dresser';
import productDraft from './modern-glam-dresser.spec.json';

describe(`with modernGlamDresser preset`, () => {
  it(`should return a modernGlamDresser preset`, () => {
    const modernGlamDresserPreset = modernGlamDresser().build<TProductDraft>();
    expect(modernGlamDresserPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a modernGlamDresser preset when built for graphql`, () => {
    const modernGlamDresserPresetGraphql =
      modernGlamDresser().buildGraphql<TProductDraft>();
    expect(modernGlamDresserPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
