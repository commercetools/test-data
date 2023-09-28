import type { TProductDraft } from '../../../types';
import modernBookcase from './modern-bookcase';
import productDraft from './modern-bookcase.spec.json';

describe(`with modernBookcase preset`, () => {
  it(`should return a modernBookcase preset`, () => {
    const modernBookcasePreset = modernBookcase().build<TProductDraft>();
    expect(modernBookcasePreset).toMatchObject(productDraft.rest);
  });

  it(`should return a modernBookcase preset when built for graphql`, () => {
    const modernBookcasePresetGraphql =
      modernBookcase().buildGraphql<TProductDraft>();
    expect(modernBookcasePresetGraphql).toMatchObject(productDraft.graphql);
  });
});
