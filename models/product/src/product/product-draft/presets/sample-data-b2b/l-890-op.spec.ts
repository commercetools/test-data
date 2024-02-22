import type { TProductDraft } from '../../../types';
import l890Op from './l-890-op';

describe(`with l890Op preset`, () => {
  it(`should return a l890Op preset`, () => {
    const l890OpPreset = l890Op().build<TProductDraft>();
    expect(l890OpPreset).toMatchInlineSnapshot();
  });

  it(`should return a l890Op preset when built for graphql`, () => {
    const l890OpPresetGraphql = l890Op().buildGraphql<TProductDraft>();
    expect(l890OpPresetGraphql).toMatchInlineSnapshot();
  });
});
