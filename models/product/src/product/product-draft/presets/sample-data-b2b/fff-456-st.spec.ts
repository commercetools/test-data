import type { TProductDraft } from '../../../types';
import fff456St from './fff-456-st';

describe(`with fff456St preset`, () => {
  it(`should return a fff456St preset`, () => {
    const fff456StPreset = fff456St().build<TProductDraft>();
    expect(fff456StPreset).toMatchInlineSnapshot();
  });

  it(`should return a fff456St preset when built for graphql`, () => {
    const fff456StPresetGraphql = fff456St().buildGraphql<TProductDraft>();
    expect(fff456StPresetGraphql).toMatchInlineSnapshot();
  });
});
