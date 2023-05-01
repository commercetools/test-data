import { TProductVariantDraft } from '../../../types';
import anniversaryShirtVariant01 from './anniversary-shirt-variant-01';

describe(`with anniversaryShirtVariant01 preset`, () => {
  it(`should return a anniversaryShirtVariant01 preset`, () => {
    const anniversaryShirtVariant01Preset =
      anniversaryShirtVariant01().build<TProductVariantDraft>();
    expect(anniversaryShirtVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": [],
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Small",
              "label": "Small",
            },
          },
        ],
        "images": [],
        "key": undefined,
        "prices": [],
        "sku": undefined,
      }
    `);
  });

  it(`should return a anniversaryShirtVariant01 preset when built for graphql`, () => {
    const anniversaryShirtVariant01PresetGraphql =
      anniversaryShirtVariant01().buildGraphql<TProductVariantDraft>();
    expect(anniversaryShirtVariant01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductVariantInput",
        "assets": [],
        "attributes": [
          {
            "__typename": "ProductAttributeInput",
            "name": "size",
            "value": {
              "key": "Small",
              "label": "Small",
            },
          },
        ],
        "images": [],
        "key": undefined,
        "prices": [],
        "sku": undefined,
      }
    `);
  });
});
