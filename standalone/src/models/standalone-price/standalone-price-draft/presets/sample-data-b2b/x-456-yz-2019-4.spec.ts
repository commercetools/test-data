import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20194 from './x-456-yz-2019-4';

describe(`with x456Yz20194 preset`, () => {
  it(`should return a x456Yz20194 preset`, () => {
    const x456Yz20194Preset = x456Yz20194().build<TStandalonePriceDraft>();
    expect(x456Yz20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2019-4",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a x456Yz20194 preset when built for graphql`, () => {
    const x456Yz20194PresetGraphql =
      x456Yz20194().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2019-4",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
