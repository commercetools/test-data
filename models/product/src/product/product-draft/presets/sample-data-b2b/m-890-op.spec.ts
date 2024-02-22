import type { TProductDraft } from '../../../types';
import m890Op from './m-890-op';

describe(`with m890Op preset`, () => {
  it(`should return a m890Op preset`, () => {
    const m890OpPreset = m890Op().build<TProductDraft>();
    expect(m890OpPreset).toMatchInlineSnapshot();
  });

  it(`should return a m890Op preset when built for graphql`, () => {
    const m890OpPresetGraphql = m890Op().buildGraphql<TProductDraft>();
    expect(m890OpPresetGraphql).toMatchInlineSnapshot();
  });
});
