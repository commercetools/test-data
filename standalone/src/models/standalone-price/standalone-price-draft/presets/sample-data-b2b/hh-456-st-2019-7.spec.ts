import type { TStandalonePriceDraft } from '../../../types';
import hh456St20197 from './hh-456-st-2019-7';

describe(`with hh456St20197 preset`, () => {
  it(`should return a hh456St20197 preset`, () => {
    const hh456St20197Preset = hh456St20197().build<TStandalonePriceDraft>();
    expect(hh456St20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2019-7",
        "sku": "hh456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hh456St20197 preset when built for graphql`, () => {
    const hh456St20197PresetGraphql =
      hh456St20197().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2019-7",
        "sku": "hh456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
