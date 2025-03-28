import type { TProductVariantDraft } from '../../../types';
import j234Wx01 from './j-234-wx-01';

describe(`with j234Wx01 preset`, () => {
  it(`should return a j234Wx01 preset`, () => {
    const j234Wx01Preset = j234Wx01().build<TProductVariantDraft>();
    expect(j234Wx01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 750,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/j234-wx-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "j234-wx-2015",
      }
    `);
  });

  it(`should return a j234Wx01 preset when built for graphql`, () => {
    const j234Wx01PresetGraphql =
      j234Wx01().buildGraphql<TProductVariantDraft>();
    expect(j234Wx01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "750",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/j234-wx-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "j234-wx-2015",
        "staged": true,
      }
    `);
  });
});
