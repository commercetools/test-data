import type { TProductDraft } from '../../../types';
import teakServingPlatter from './teak-serving-platter';

describe(`with teakServingPlatter preset`, () => {
  it(`should return a teakServingPlatter preset`, () => {
    const teakServingPlatterPreset =
      teakServingPlatter().build<TProductDraft>();
    expect(teakServingPlatterPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a teakServingPlatter preset when built for graphql`, () => {
    const teakServingPlatterPresetGraphql =
      teakServingPlatter().buildGraphql<TProductDraft>();
    expect(teakServingPlatterPresetGraphql).toMatchInlineSnapshot(``);
  });
});
