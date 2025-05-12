import type { TProductVariantDraft } from '../../../types';
import qq567Yz02 from './qq-567-yz-02';

describe(`with qq567Yz02 preset`, () => {
  it(`should return a qq567Yz02 preset`, () => {
    const qq567Yz02Preset = qq567Yz02().build<TProductVariantDraft>();
    expect(qq567Yz02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/qq567-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "qq567-yz-2019",
      }
    `);
  });

  it(`should return a qq567Yz02 preset when built for graphql`, () => {
    const qq567Yz02PresetGraphql =
      qq567Yz02().buildGraphql<TProductVariantDraft>();
    expect(qq567Yz02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/qq567-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "qq567-yz-2019",
      }
    `);
  });
});
