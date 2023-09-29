import type { TProductDraft } from '../../../types';
import modernThreeSeaterSofa from './modern-three-seater-sofa';

describe(`with modernThreeSeaterSofa preset`, () => {
  it(`should return a modernThreeSeaterSofa preset`, () => {
    const modernThreeSeaterSofaPreset =
      modernThreeSeaterSofa().build<TProductDraft>();
    expect(modernThreeSeaterSofaPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernThreeSeaterSofa preset when built for graphql`, () => {
    const modernThreeSeaterSofaPresetGraphql =
      modernThreeSeaterSofa().buildGraphql<TProductDraft>();
    expect(modernThreeSeaterSofaPresetGraphql).toMatchInlineSnapshot(``);
  });
});
