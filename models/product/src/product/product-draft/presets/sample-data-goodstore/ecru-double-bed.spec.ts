import type { TProductDraft } from '../../../types';
import ecruDoubleBed from './ecru-double-bed';
import productDraft from './ecru-double-bed.spec.json';

describe(`with ecruDoubleBed preset`, () => {
  it(`should return a ecruDoubleBed preset`, () => {
    const ecruDoubleBedPreset = ecruDoubleBed().build<TProductDraft>();
    expect(ecruDoubleBedPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a ecruDoubleBed preset when built for graphql`, () => {
    const ecruDoubleBedPresetGraphql =
      ecruDoubleBed().buildGraphql<TProductDraft>();
    expect(ecruDoubleBedPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
