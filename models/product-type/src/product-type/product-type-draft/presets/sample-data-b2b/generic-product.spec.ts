import type { TProductTypeDraft } from '../../../types';
import genericProduct from './generic-product';

describe(`with genericProduct preset`, () => {
  it(`should return a genericProduct preset`, () => {
    const genericProductPreset = genericProduct().build<TProductTypeDraft>();
    expect(genericProductPreset).toMatchInlineSnapshot();
  });

  it(`should return a genericProduct preset when built for graphql`, () => {
    const genericProductPresetGraphql =
      genericProduct().buildGraphql<TProductTypeDraft>();
    expect(genericProductPresetGraphql).toMatchInlineSnapshot();
  });
});
