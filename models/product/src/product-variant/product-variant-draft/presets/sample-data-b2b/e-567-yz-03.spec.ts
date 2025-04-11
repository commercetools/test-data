import type { TProductVariantDraft } from '../../../types';
import e567Yz03 from './e-567-yz-03';

describe(`with e567Yz03 preset`, () => {
  it(`should return a e567Yz03 preset`, () => {
    const e567Yz03Preset = e567Yz03().build<TProductVariantDraft>();
    expect(e567Yz03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 550,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/e567-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "e567-yz-2023",
      }
    `);
  });

  it(`should return a e567Yz03 preset when built for graphql`, () => {
    const e567Yz03PresetGraphql =
      e567Yz03().buildGraphql<TProductVariantDraft>();
    expect(e567Yz03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "550",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/e567-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "e567-yz-2023",
      }
    `);
  });
});
