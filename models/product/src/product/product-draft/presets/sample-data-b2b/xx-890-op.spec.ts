import type { TProductDraft } from '../../../types';
import xx890Op from './xx-890-op';

describe(`with xx890Op preset`, () => {
  it(`should return a xx890Op preset`, () => {
    const xx890OpPreset = xx890Op().build<TProductDraft>();
    expect(xx890OpPreset).toMatchInlineSnapshot();
  });

  it(`should return a xx890Op preset when built for graphql`, () => {
    const xx890OpPresetGraphql = xx890Op().buildGraphql<TProductDraft>();
    expect(xx890OpPresetGraphql).toMatchInlineSnapshot();
  });
});
