import type { TProductTypeDraft } from '../../../types';
import * as genericProductPresets from './generic-product';

describe(`with genericProduct preset`, () => {
  it(`should return a genericProduct preset`, () => {
    const genericProductPreset = genericProductPresets
      .restPreset()
      .build<TProductTypeDraft>();
    expect(genericProductPreset).toMatchInlineSnapshot(`
      {
        "attributes": [],
        "description": "Products without specific attributes",
        "key": "generic-product",
        "name": "Generic Product",
      }
    `);
  });

  it(`should return a genericProduct preset when built for graphql`, () => {
    const genericProductPresetGraphql = genericProductPresets
      .graphqlPreset()
      .buildGraphql<TProductTypeDraft>();
    expect(genericProductPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributeDefinitions": [],
        "description": "Products without specific attributes",
        "key": "generic-product",
        "name": "Generic Product",
      }
    `);
  });
});
