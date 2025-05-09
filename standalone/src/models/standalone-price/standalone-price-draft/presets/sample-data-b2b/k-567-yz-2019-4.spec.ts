import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20194 from './k-567-yz-2019-4';

describe(`with k567Yz20194 preset`, () => {
  it(`should return a k567Yz20194 preset`, () => {
    const k567Yz20194Preset = k567Yz20194().build<TStandalonePriceDraft>();
    expect(k567Yz20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2019-4",
        "sku": "k567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a k567Yz20194 preset when built for graphql`, () => {
    const k567Yz20194PresetGraphql =
      k567Yz20194().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2019-4",
        "sku": "k567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
