import type { TProductDraft } from '../../../types';
import ll890Op from './ll-890-op';

describe(`with ll890Op preset`, () => {
  it(`should return a ll890Op preset`, () => {
    const ll890OpPreset = ll890Op().build<TProductDraft>();
    expect(ll890OpPreset).toMatchInlineSnapshot();
  });

  it(`should return a ll890Op preset when built for graphql`, () => {
    const ll890OpPresetGraphql = ll890Op().buildGraphql<TProductDraft>();
    expect(ll890OpPresetGraphql).toMatchInlineSnapshot();
  });
});
