import type { TProductVariantDraft } from '../../../types';
import qq567Yz03 from './qq-567-yz-03';

describe(`with qq567Yz03 preset`, () => {
  it(`should return a qq567Yz03 preset`, () => {
    const qq567Yz03Preset = qq567Yz03().build<TProductVariantDraft>();
    expect(qq567Yz03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/qq567-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "qq567-yz-2023",
      }
    `);
  });

  it(`should return a qq567Yz03 preset when built for graphql`, () => {
    const qq567Yz03PresetGraphql =
      qq567Yz03().buildGraphql<TProductVariantDraft>();
    expect(qq567Yz03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/qq567-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "qq567-yz-2023",
      }
    `);
  });
});
