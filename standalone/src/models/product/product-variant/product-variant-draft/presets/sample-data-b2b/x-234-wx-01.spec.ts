import type { TProductVariantDraft } from '../../../types';
import x234Wx01 from './x-234-wx-01';

describe(`with x234Wx01 preset`, () => {
  it(`should return a x234Wx01 preset`, () => {
    const x234Wx01Preset = x234Wx01().build<TProductVariantDraft>();
    expect(x234Wx01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 400,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x234-wx-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "x234-wx-2015",
      }
    `);
  });

  it(`should return a x234Wx01 preset when built for graphql`, () => {
    const x234Wx01PresetGraphql =
      x234Wx01().buildGraphql<TProductVariantDraft>();
    expect(x234Wx01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "400",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x234-wx-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "x234-wx-2015",
      }
    `);
  });
});
