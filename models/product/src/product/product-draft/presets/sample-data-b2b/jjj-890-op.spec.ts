import type { TProductDraft } from '../../../types';
import jjj890Op from './jjj-890-op';

describe(`with jjj890Op preset`, () => {
  it(`should return a jjj890Op preset`, () => {
    const jjj890OpPreset = jjj890Op().build<TProductDraft>();
    expect(jjj890OpPreset).toMatchInlineSnapshot();
  });

  it(`should return a jjj890Op preset when built for graphql`, () => {
    const jjj890OpPresetGraphql = jjj890Op().buildGraphql<TProductDraft>();
    expect(jjj890OpPresetGraphql).toMatchInlineSnapshot();
  });
});
