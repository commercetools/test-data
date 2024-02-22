import type { TProductDraft } from '../../../types';
import z890Op from './z-890-op';

describe(`with z890Op preset`, () => {
  it(`should return a z890Op preset`, () => {
    const z890OpPreset = z890Op().build<TProductDraft>();
    expect(z890OpPreset).toMatchInlineSnapshot();
  });

  it(`should return a z890Op preset when built for graphql`, () => {
    const z890OpPresetGraphql = z890Op().buildGraphql<TProductDraft>();
    expect(z890OpPresetGraphql).toMatchInlineSnapshot();
  });
});
