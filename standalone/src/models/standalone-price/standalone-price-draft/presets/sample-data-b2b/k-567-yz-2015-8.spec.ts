import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20158 from './k-567-yz-2015-8';

describe(`with k567Yz20158 preset`, () => {
  it(`should return a k567Yz20158 preset`, () => {
    const k567Yz20158Preset = k567Yz20158().build<TStandalonePriceDraft>();
    expect(k567Yz20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-8",
        "recurrencePolicy": undefined,
        "sku": "k567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1430000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a k567Yz20158 preset when built for graphql`, () => {
    const k567Yz20158PresetGraphql =
      k567Yz20158().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-8",
        "recurrencePolicy": undefined,
        "sku": "k567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1430000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
