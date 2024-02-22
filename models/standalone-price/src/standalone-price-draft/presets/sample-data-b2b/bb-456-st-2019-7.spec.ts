import type { TStandalonePriceDraft } from '../../../types';
import bb456St20197 from './bb-456-st-2019-7';

describe(`with bb456St20197 preset`, () => {
  it(`should return a bb456St20197 preset`, () => {
    const bb456St20197Preset = bb456St20197().build<TStandalonePriceDraft>();
    expect(bb456St20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2019-7",
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2160000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bb456St20197 preset when built for graphql`, () => {
    const bb456St20197PresetGraphql =
      bb456St20197().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2019-7",
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2160000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
