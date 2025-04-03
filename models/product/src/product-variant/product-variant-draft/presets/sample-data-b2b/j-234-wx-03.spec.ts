import type { TProductVariantDraft } from '../../../types';
import j234Wx03 from './j-234-wx-03';

describe(`with j234Wx03 preset`, () => {
  it(`should return a j234Wx03 preset`, () => {
    const j234Wx03Preset = j234Wx03().build<TProductVariantDraft>();
    expect(j234Wx03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 750,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/j234-wx-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "j234-wx-2023",
      }
    `);
  });

  it(`should return a j234Wx03 preset when built for graphql`, () => {
    const j234Wx03PresetGraphql =
      j234Wx03().buildGraphql<TProductVariantDraft>();
    expect(j234Wx03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "750",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/j234-wx-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "j234-wx-2023",
        "staged": true,
      }
    `);
  });
});
