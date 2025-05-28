import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20158 from './e-567-yz-2015-8';

describe(`with e567Yz20158 preset`, () => {
  it(`should return a e567Yz20158 preset`, () => {
    const e567Yz20158Preset = e567Yz20158().build<TStandalonePriceDraft>();
    expect(e567Yz20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-8",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a e567Yz20158 preset when built for graphql`, () => {
    const e567Yz20158PresetGraphql =
      e567Yz20158().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-8",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
