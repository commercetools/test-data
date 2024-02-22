import type { TProductDraft } from '../../../types';
import fuelFilter from './fuel-filter';

describe(`with fuelFilter preset`, () => {
  it(`should return a fuelFilter preset`, () => {
    const fuelFilterPreset = fuelFilter().build<TProductDraft>();
    expect(fuelFilterPreset).toMatchInlineSnapshot();
  });

  it(`should return a fuelFilter preset when built for graphql`, () => {
    const fuelFilterPresetGraphql = fuelFilter().buildGraphql<TProductDraft>();
    expect(fuelFilterPresetGraphql).toMatchInlineSnapshot();
  });
});
