import type { TProductVariantDraft } from '../../../types';
import qq567Yz01 from './qq-567-yz-01';

describe(`with qq567Yz01 preset`, () => {
  it(`should return a qq567Yz01 preset`, () => {
    const qq567Yz01Preset = qq567Yz01().build<TProductVariantDraft>();
    expect(qq567Yz01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/qq567-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "qq567-yz-2015",
      }
    `);
  });

  it(`should return a qq567Yz01 preset when built for graphql`, () => {
    const qq567Yz01PresetGraphql =
      qq567Yz01().buildGraphql<TProductVariantDraft>();
    expect(qq567Yz01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/qq567-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "qq567-yz-2015",
        "staged": true,
      }
    `);
  });
});
