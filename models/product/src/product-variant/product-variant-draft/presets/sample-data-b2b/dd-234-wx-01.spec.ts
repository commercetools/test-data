import type { TProductVariantDraft } from '../../../types';
import dd234Wx01 from './dd-234-wx-01';

describe(`with dd234Wx01 preset`, () => {
  it(`should return a dd234Wx01 preset`, () => {
    const dd234Wx01Preset = dd234Wx01().build<TProductVariantDraft>();
    expect(dd234Wx01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 450,
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
              "key": "wheeled",
              "label": "Wheeled",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 1024,
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/dd234-wx-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "dd234-wx-2015",
      }
    `);
  });

  it(`should return a dd234Wx01 preset when built for graphql`, () => {
    const dd234Wx01PresetGraphql =
      dd234Wx01().buildGraphql<TProductVariantDraft>();
    expect(dd234Wx01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "450",
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
            "value": "{"key":"wheeled","label":"Wheeled"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/dd234-wx-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "dd234-wx-2015",
        "staged": true,
      }
    `);
  });
});
