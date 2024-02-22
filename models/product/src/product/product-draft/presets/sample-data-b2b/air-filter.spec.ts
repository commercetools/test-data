import type { TProductDraft } from '../../../types';
import airFilter from './air-filter';

describe(`with airFilter preset`, () => {
  it(`should return a airFilter preset`, () => {
    const airFilterPreset = airFilter().build<TProductDraft>();
    expect(airFilterPreset).toMatchInlineSnapshot();
  });

  it(`should return a airFilter preset when built for graphql`, () => {
    const airFilterPresetGraphql = airFilter().buildGraphql<TProductDraft>();
    expect(airFilterPresetGraphql).toMatchInlineSnapshot();
  });
});
