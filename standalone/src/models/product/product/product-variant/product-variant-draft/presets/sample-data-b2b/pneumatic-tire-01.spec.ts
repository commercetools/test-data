import type { TProductVariantDraft } from '../../../types';
import pneumaticTire01 from './pneumatic-tire-01';

describe(`with pneumaticTire01 preset`, () => {
  it(`should return a pneumaticTire01 preset`, () => {
    const pneumaticTire01Preset =
      pneumaticTire01().build<TProductVariantDraft>();
    expect(pneumaticTire01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [],
        "images": [
          {
            "dimensions": {
              "h": 1024,
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pneumatic-tire.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "pneumatic-tire",
      }
    `);
  });

  it(`should return a pneumaticTire01 preset when built for graphql`, () => {
    const pneumaticTire01PresetGraphql =
      pneumaticTire01().buildGraphql<TProductVariantDraft>();
    expect(pneumaticTire01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pneumatic-tire.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "pneumatic-tire",
      }
    `);
  });
});
