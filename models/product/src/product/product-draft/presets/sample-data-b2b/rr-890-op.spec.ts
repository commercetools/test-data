import type { TProductDraft } from '../../../types';
import rr890Op from './rr-890-op';

describe(`with rr890Op preset`, () => {
  it(`should return a rr890Op preset`, () => {
    const rr890OpPreset = rr890Op().build<TProductDraft>();
    expect(rr890OpPreset).toMatchInlineSnapshot();
  });

  it(`should return a rr890Op preset when built for graphql`, () => {
    const rr890OpPresetGraphql = rr890Op().buildGraphql<TProductDraft>();
    expect(rr890OpPresetGraphql).toMatchInlineSnapshot();
  });
});
