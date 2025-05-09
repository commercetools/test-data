import type { TProductVariantDraft } from '../../../types';
import pp234Wx01 from './pp-234-wx-01';

describe(`with pp234Wx01 preset`, () => {
  it(`should return a pp234Wx01 preset`, () => {
    const pp234Wx01Preset = pp234Wx01().build<TProductVariantDraft>();
    expect(pp234Wx01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
          },
          {
            "name": "model",
            "value": 2015,
          },
          {
            "name": "iso45001",
            "value": true,
          },
          {
            "name": "mobility",
            "value": {
              "key": "tracked",
              "label": "Tracked",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 1024,
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pp234-wx-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "pp234-wx-2015",
      }
    `);
  });

  it(`should return a pp234Wx01 preset when built for graphql`, () => {
    const pp234Wx01PresetGraphql =
      pp234Wx01().buildGraphql<TProductVariantDraft>();
    expect(pp234Wx01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
          },
          {
            "name": "model",
            "value": "2015",
          },
          {
            "name": "iso45001",
            "value": "true",
          },
          {
            "name": "mobility",
            "value": "{"key":"tracked","label":"Tracked"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pp234-wx-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "pp234-wx-2015",
      }
    `);
  });
});
