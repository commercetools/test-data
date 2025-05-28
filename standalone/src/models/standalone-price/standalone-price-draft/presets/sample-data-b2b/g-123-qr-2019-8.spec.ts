import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20198 from './g-123-qr-2019-8';

describe(`with g123Qr20198 preset`, () => {
  it(`should return a g123Qr20198 preset`, () => {
    const g123Qr20198Preset = g123Qr20198().build<TStandalonePriceDraft>();
    expect(g123Qr20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-8",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a g123Qr20198 preset when built for graphql`, () => {
    const g123Qr20198PresetGraphql =
      g123Qr20198().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-8",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
