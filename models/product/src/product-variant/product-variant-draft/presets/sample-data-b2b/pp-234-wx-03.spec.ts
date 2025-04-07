import type { TProductVariantDraft } from '../../../types';
import pp234Wx03 from './pp-234-wx-03';

describe(`with pp234Wx03 preset`, () => {
  it(`should return a pp234Wx03 preset`, () => {
    const pp234Wx03Preset = pp234Wx03().build<TProductVariantDraft>();
    expect(pp234Wx03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
          },
          {
            "name": "model",
            "value": 2023,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pp234-wx-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "pp234-wx-2023",
      }
    `);
  });

  it(`should return a pp234Wx03 preset when built for graphql`, () => {
    const pp234Wx03PresetGraphql =
      pp234Wx03().buildGraphql<TProductVariantDraft>();
    expect(pp234Wx03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
          },
          {
            "name": "model",
            "value": "2023",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pp234-wx-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "pp234-wx-2023",
        "staged": true,
      }
    `);
  });
});
