import type { TProductVariantDraft } from '../../../types';
import a789Bc03 from './a-789-bc-03';

describe(`with a789Bc03 preset`, () => {
  it(`should return a a789Bc03 preset`, () => {
    const a789Bc03Preset = a789Bc03().build<TProductVariantDraft>();
    expect(a789Bc03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 750,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/a789-bc-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "a789-bc-2023",
      }
    `);
  });

  it(`should return a a789Bc03 preset when built for graphql`, () => {
    const a789Bc03PresetGraphql =
      a789Bc03().buildGraphql<TProductVariantDraft>();
    expect(a789Bc03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "750",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/a789-bc-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "a789-bc-2023",
      }
    `);
  });
});
