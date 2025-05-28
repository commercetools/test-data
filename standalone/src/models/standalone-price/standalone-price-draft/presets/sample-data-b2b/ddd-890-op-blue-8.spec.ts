import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpBlue8 from './ddd-890-op-blue-8';

describe(`with ddd890OpBlue8 preset`, () => {
  it(`should return a ddd890OpBlue8 preset`, () => {
    const ddd890OpBlue8Preset = ddd890OpBlue8().build<TStandalonePriceDraft>();
    expect(ddd890OpBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-8",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8250001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ddd890OpBlue8 preset when built for graphql`, () => {
    const ddd890OpBlue8PresetGraphql =
      ddd890OpBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-8",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8250001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
