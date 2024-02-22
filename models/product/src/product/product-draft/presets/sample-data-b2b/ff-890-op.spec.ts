import type { TProductDraft } from '../../../types';
import ff890Op from './ff-890-op';

describe(`with ff890Op preset`, () => {
  it(`should return a ff890Op preset`, () => {
    const ff890OpPreset = ff890Op().build<TProductDraft>();
    expect(ff890OpPreset).toMatchInlineSnapshot();
  });

  it(`should return a ff890Op preset when built for graphql`, () => {
    const ff890OpPresetGraphql = ff890Op().buildGraphql<TProductDraft>();
    expect(ff890OpPresetGraphql).toMatchInlineSnapshot();
  });
});
