import type { TProductVariantDraft } from '../../../types';
import anniversaryShirtVariant03 from './anniversary-shirt-variant-03';

describe(`with anniversaryShirtVariant03 preset`, () => {
  it(`should return a anniversaryShirtVariant03 preset`, () => {
    const anniversaryShirtVariant03Preset =
      anniversaryShirtVariant03().build<TProductVariantDraft>();
    expect(anniversaryShirtVariant03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Large",
              "label": "Large",
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

  it(`should return a anniversaryShirtVariant03 preset when built for graphql`, () => {
    const anniversaryShirtVariant03PresetGraphql =
      anniversaryShirtVariant03().buildGraphql<TProductVariantDraft>();
    expect(anniversaryShirtVariant03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Large",
              "label": "Large",
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
});
