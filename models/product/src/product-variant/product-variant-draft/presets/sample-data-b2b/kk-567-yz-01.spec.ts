import type { TProductVariantDraft } from '../../../types';
import kk567Yz01 from './kk-567-yz-01';

describe(`with kk567Yz01 preset`, () => {
  it(`should return a kk567Yz01 preset`, () => {
    const kk567Yz01Preset = kk567Yz01().build<TProductVariantDraft>();
    expect(kk567Yz01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 900,
          },
          {
            "name": "model",
            "value": 2015,
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
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/kk567-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "kk567-yz-2015",
      }
    `);
  });

  it(`should return a kk567Yz01 preset when built for graphql`, () => {
    const kk567Yz01PresetGraphql =
      kk567Yz01().buildGraphql<TProductVariantDraft>();
    expect(kk567Yz01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "900",
          },
          {
            "name": "model",
            "value": "2015",
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
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/kk567-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "kk567-yz-2015",
        "staged": true,
      }
    `);
  });
});
