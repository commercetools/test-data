import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20153 from './qq-567-yz-2015-3';

describe(`with qq567Yz20153 preset`, () => {
  it(`should return a qq567Yz20153 preset`, () => {
    const qq567Yz20153Preset = qq567Yz20153().build<TStandalonePriceDraft>();
    expect(qq567Yz20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2015-3",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a qq567Yz20153 preset when built for graphql`, () => {
    const qq567Yz20153PresetGraphql =
      qq567Yz20153().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2015-3",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
