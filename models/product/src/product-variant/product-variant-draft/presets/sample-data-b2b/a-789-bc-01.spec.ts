import type { TProductVariantDraft } from '../../../types';
import a789Bc01 from './a-789-bc-01';

describe(`with a789Bc01 preset`, () => {
  it(`should return a a789Bc01 preset`, () => {
    const a789Bc01Preset = a789Bc01().build<TProductVariantDraft>();
    expect(a789Bc01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/a789-bc-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "a789-bc-2015",
      }
    `);
  });

  it(`should return a a789Bc01 preset when built for graphql`, () => {
    const a789Bc01PresetGraphql =
      a789Bc01().buildGraphql<TProductVariantDraft>();
    expect(a789Bc01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/a789-bc-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "a789-bc-2015",
        "staged": true,
      }
    `);
  });
});
