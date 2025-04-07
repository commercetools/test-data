import type { TProductVariantDraft } from '../../../types';
import r123Ts03 from './r-123-ts-03';

describe(`with r123Ts03 preset`, () => {
  it(`should return a r123Ts03 preset`, () => {
    const r123Ts03Preset = r123Ts03().build<TProductVariantDraft>();
    expect(r123Ts03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/r123-ts-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "r123-ts-2023",
      }
    `);
  });

  it(`should return a r123Ts03 preset when built for graphql`, () => {
    const r123Ts03PresetGraphql =
      r123Ts03().buildGraphql<TProductVariantDraft>();
    expect(r123Ts03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/r123-ts-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "r123-ts-2023",
        "staged": true,
      }
    `);
  });
});
