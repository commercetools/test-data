import type { TProductVariantDraft } from '../../../types';
import r123Ts01 from './r-123-ts-01';

describe(`with r123Ts01 preset`, () => {
  it(`should return a r123Ts01 preset`, () => {
    const r123Ts01Preset = r123Ts01().build<TProductVariantDraft>();
    expect(r123Ts01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/r123-ts-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "r123-ts-2015",
      }
    `);
  });

  it(`should return a r123Ts01 preset when built for graphql`, () => {
    const r123Ts01PresetGraphql =
      r123Ts01().buildGraphql<TProductVariantDraft>();
    expect(r123Ts01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/r123-ts-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "r123-ts-2015",
        "staged": true,
      }
    `);
  });
});
