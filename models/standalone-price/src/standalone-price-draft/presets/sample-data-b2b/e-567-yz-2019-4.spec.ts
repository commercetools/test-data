import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20194 from './e-567-yz-2019-4';

describe(`with e567Yz20194 preset`, () => {
  it(`should return a e567Yz20194 preset`, () => {
    const e567Yz20194Preset = e567Yz20194().build<TStandalonePriceDraft>();
    expect(e567Yz20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2019-4",
        "sku": "e567-yz-2019",
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

  it(`should return a e567Yz20194 preset when built for graphql`, () => {
    const e567Yz20194PresetGraphql =
      e567Yz20194().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2019-4",
        "sku": "e567-yz-2019",
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
