import type { TProductDraft } from '../../../types';
import modernGlamDresser from './modern-glam-dresser';

describe(`with modernGlamDresser preset`, () => {
  it(`should return a modernGlamDresser preset`, () => {
    const modernGlamDresserPreset = modernGlamDresser().build<TProductDraft>();
    expect(modernGlamDresserPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernGlamDresser preset when built for graphql`, () => {
    const modernGlamDresserPresetGraphql =
      modernGlamDresser().buildGraphql<TProductDraft>();
    expect(modernGlamDresserPresetGraphql).toMatchInlineSnapshot(``);
  });
});
