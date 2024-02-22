import type { TProductDraft } from '../../../types';
import ddd890Op from './ddd-890-op';

describe(`with ddd890Op preset`, () => {
  it(`should return a ddd890Op preset`, () => {
    const ddd890OpPreset = ddd890Op().build<TProductDraft>();
    expect(ddd890OpPreset).toMatchInlineSnapshot();
  });

  it(`should return a ddd890Op preset when built for graphql`, () => {
    const ddd890OpPresetGraphql = ddd890Op().buildGraphql<TProductDraft>();
    expect(ddd890OpPresetGraphql).toMatchInlineSnapshot();
  });
});
