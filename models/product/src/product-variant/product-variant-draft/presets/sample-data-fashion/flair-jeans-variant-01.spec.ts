import type { TProductVariantDraft } from '../../../types';
import flairJeansVariant01 from './flair-jeans-variant-01';

describe(`with flairJeansVariant01 preset`, () => {
  it(`should return a flairJeansVariant01 preset`, () => {
    const flairJeansVariant01Preset =
      flairJeansVariant01().build<TProductVariantDraft>();
    expect(flairJeansVariant01Preset).toMatchInlineSnapshot(`
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
              "key": "Blue",
              "label": "Blue",
            },
          },
          {
            "name": "length",
            "value": {
              "key": "Crop",
              "label": "Crop",
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

  it(`should return a flairJeansVariant01 preset when built for graphql`, () => {
    const flairJeansVariant01PresetGraphql =
      flairJeansVariant01().buildGraphql<TProductVariantDraft>();
    expect(flairJeansVariant01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": "{"key":"Large","label":"Large"}",
          },
          {
            "name": "fit",
            "value": "{"key":"Flair","label":"Flair"}",
          },
          {
            "name": "color",
            "value": "{"key":"Blue","label":"Blue"}",
          },
          {
            "name": "length",
            "value": "{"key":"Crop","label":"Crop"}",
          },
        ],
        "images": undefined,
        "key": undefined,
        "prices": undefined,
        "sku": undefined,
        "staged": true,
      }
    `);
  });
});
