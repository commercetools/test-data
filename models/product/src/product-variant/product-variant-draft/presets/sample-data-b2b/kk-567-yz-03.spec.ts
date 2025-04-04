import type { TProductVariantDraft } from '../../../types';
import kk567Yz03 from './kk-567-yz-03';

describe(`with kk567Yz03 preset`, () => {
  it(`should return a kk567Yz03 preset`, () => {
    const kk567Yz03Preset = kk567Yz03().build<TProductVariantDraft>();
    expect(kk567Yz03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 900,
          },
          {
            "name": "model",
            "value": 2023,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/kk567-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "kk567-yz-2023",
      }
    `);
  });

  it(`should return a kk567Yz03 preset when built for graphql`, () => {
    const kk567Yz03PresetGraphql =
      kk567Yz03().buildGraphql<TProductVariantDraft>();
    expect(kk567Yz03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "900",
          },
          {
            "name": "model",
            "value": "2023",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/kk567-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "kk567-yz-2023",
        "staged": true,
      }
    `);
  });
});
