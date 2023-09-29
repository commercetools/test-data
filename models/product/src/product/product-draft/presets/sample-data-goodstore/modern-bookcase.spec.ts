import type { TProductDraft } from '../../../types';
import modernBookcase from './modern-bookcase';

describe(`with modernBookcase preset`, () => {
  it(`should return a modernBookcase preset`, () => {
    const modernBookcasePreset = modernBookcase().build<TProductDraft>();
    expect(modernBookcasePreset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernBookcase preset when built for graphql`, () => {
    const modernBookcasePresetGraphql =
      modernBookcase().buildGraphql<TProductDraft>();
    expect(modernBookcasePresetGraphql).toMatchInlineSnapshot(``);
  });
});
