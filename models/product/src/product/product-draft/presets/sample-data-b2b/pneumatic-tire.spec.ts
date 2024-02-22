import type { TProductDraft } from '../../../types';
import pneumaticTire from './pneumatic-tire';

describe(`with pneumaticTire preset`, () => {
  it(`should return a pneumaticTire preset`, () => {
    const pneumaticTirePreset = pneumaticTire().build<TProductDraft>();
    expect(pneumaticTirePreset).toMatchInlineSnapshot();
  });

  it(`should return a pneumaticTire preset when built for graphql`, () => {
    const pneumaticTirePresetGraphql =
      pneumaticTire().buildGraphql<TProductDraft>();
    expect(pneumaticTirePresetGraphql).toMatchInlineSnapshot();
  });
});
