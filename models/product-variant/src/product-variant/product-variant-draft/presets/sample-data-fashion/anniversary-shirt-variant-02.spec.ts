import type { TProductVariantDraft } from '../../../types';
import anniversaryShirtVariant02 from './anniversary-shirt-variant-02';

describe(`with anniversaryShirtVariant02 preset`, () => {
  it(`should return a anniversaryShirtVariant02 preset`, () => {
    const anniversaryShirtVariant02Preset =
      anniversaryShirtVariant02().build<TProductVariantDraft>();
    expect(anniversaryShirtVariant02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Medium",
              "label": "Medium",
            },
          },
        ],
        "images": undefined,
        "key": undefined,
        "prices": undefined,
        "sku": undefined,
      }
    `);
  });

  it(`should return a anniversaryShirtVariant02 preset when built for graphql`, () => {
    const anniversaryShirtVariant02PresetGraphql =
      anniversaryShirtVariant02().buildGraphql<TProductVariantDraft>();
    expect(anniversaryShirtVariant02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": "{"key":"Medium","label":"Medium"}",
          },
        ],
        "images": undefined,
        "key": undefined,
        "prices": undefined,
        "sku": undefined,
      }
    `);
  });
});
