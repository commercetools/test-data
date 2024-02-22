import type { TProductDraft } from '../../../types';
import f890Op from './f-890-op';

describe(`with f890Op preset`, () => {
  it(`should return a f890Op preset`, () => {
    const f890OpPreset = f890Op().build<TProductDraft>();
    expect(f890OpPreset).toMatchInlineSnapshot();
  });

  it(`should return a f890Op preset when built for graphql`, () => {
    const f890OpPresetGraphql = f890Op().buildGraphql<TProductDraft>();
    expect(f890OpPresetGraphql).toMatchInlineSnapshot();
  });
});
