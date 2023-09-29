import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernGlamDresser01 from './modern-glam-dresser-01';

describe(`with modernGlamDresser01 preset`, () => {
  it(`should return a modernGlamDresser01 preset`, () => {
    const modernGlamDresser01Preset =
      modernGlamDresser01().build<TProductVariantDraft>();
    expect(modernGlamDresser01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernGlamDresser01 preset when built for graphql`, () => {
    const modernGlamDresser01PresetGraphql =
      modernGlamDresser01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernGlamDresser01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
