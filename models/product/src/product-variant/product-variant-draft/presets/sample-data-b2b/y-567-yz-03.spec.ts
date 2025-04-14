import type { TProductVariantDraft } from '../../../types';
import y567Yz03 from './y-567-yz-03';

describe(`with y567Yz03 preset`, () => {
  it(`should return a y567Yz03 preset`, () => {
    const y567Yz03Preset = y567Yz03().build<TProductVariantDraft>();
    expect(y567Yz03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 450,
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "y567-yz-2023",
      }
    `);
  });

  it(`should return a y567Yz03 preset when built for graphql`, () => {
    const y567Yz03PresetGraphql =
      y567Yz03().buildGraphql<TProductVariantDraft>();
    expect(y567Yz03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "450",
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "y567-yz-2023",
      }
    `);
  });
});
