import type { TProductVariantDraft } from '../../../types';
import starterMotor01 from './starter-motor-01';

describe(`with starterMotor01 preset`, () => {
  it(`should return a starterMotor01 preset`, () => {
    const starterMotor01Preset = starterMotor01().build<TProductVariantDraft>();
    expect(starterMotor01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/starter-motor.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "starter-motor",
      }
    `);
  });

  it(`should return a starterMotor01 preset when built for graphql`, () => {
    const starterMotor01PresetGraphql =
      starterMotor01().buildGraphql<TProductVariantDraft>();
    expect(starterMotor01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/starter-motor.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "starter-motor",
      }
    `);
  });
});
