import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20194 from './qq-567-yz-2019-4';

describe(`with qq567Yz20194 preset`, () => {
  it(`should return a qq567Yz20194 preset`, () => {
    const qq567Yz20194Preset = qq567Yz20194().build<TStandalonePriceDraft>();
    expect(qq567Yz20194Preset).toMatchInlineSnapshot(`
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
        "key": "qq567-yz-2019-4",
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a qq567Yz20194 preset when built for graphql`, () => {
    const qq567Yz20194PresetGraphql =
      qq567Yz20194().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20194PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "qq567-yz-2019-4",
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
