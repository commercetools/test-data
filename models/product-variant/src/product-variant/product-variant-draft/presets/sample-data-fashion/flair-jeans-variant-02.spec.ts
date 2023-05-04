import type { TProductVariantDraft } from '../../../types';
import flairJeansVariant02 from './flair-jeans-variant-02';

describe(`with flairJeansVariant02 preset`, () => {
  it(`should return a flairJeansVariant02 preset`, () => {
    const flairJeansVariant02Preset =
      flairJeansVariant02().build<TProductVariantDraft>();
    expect(flairJeansVariant02Preset).toMatchInlineSnapshot(`
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
          {
            "name": "fit",
            "value": {
              "key": "Flair",
              "label": "Flair",
            },
          },
          {
            "name": "color",
            "value": {
              "key": "Black",
              "label": "Black",
            },
          },
          {
            "name": "length",
            "value": {
              "key": "Extra Long",
              "label": "Extra Long",
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

  it(`should return a flairJeansVariant02 preset when built for graphql`, () => {
    const flairJeansVariant02PresetGraphql =
      flairJeansVariant02().buildGraphql<TProductVariantDraft>();
    expect(flairJeansVariant02PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductVariantInput",
        "assets": undefined,
        "attributes": [
          {
            "__typename": "ProductAttributeInput",
            "name": "size",
            "value": {
              "key": "Medium",
              "label": "Medium",
            },
          },
          {
            "__typename": "ProductAttributeInput",
            "name": "fit",
            "value": {
              "key": "Flair",
              "label": "Flair",
            },
          },
          {
            "__typename": "ProductAttributeInput",
            "name": "color",
            "value": {
              "key": "Black",
              "label": "Black",
            },
          },
          {
            "__typename": "ProductAttributeInput",
            "name": "length",
            "value": {
              "key": "Extra Long",
              "label": "Extra Long",
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
