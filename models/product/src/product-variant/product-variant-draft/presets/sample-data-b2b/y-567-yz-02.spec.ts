import type { TProductVariantDraft } from '../../../types';
import y567Yz02 from './y-567-yz-02';

describe(`with y567Yz02 preset`, () => {
  it(`should return a y567Yz02 preset`, () => {
    const y567Yz02Preset = y567Yz02().build<TProductVariantDraft>();
    expect(y567Yz02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 450,
          },
          {
            "name": "model",
            "value": 2019,
          },
          {
            "name": "iso45001",
            "value": false,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "y567-yz-2019",
      }
    `);
  });

  it(`should return a y567Yz02 preset when built for graphql`, () => {
    const y567Yz02PresetGraphql =
      y567Yz02().buildGraphql<TProductVariantDraft>();
    expect(y567Yz02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "450",
          },
          {
            "name": "model",
            "value": "2019",
          },
          {
            "name": "iso45001",
            "value": "false",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "y567-yz-2019",
      }
    `);
  });
});
