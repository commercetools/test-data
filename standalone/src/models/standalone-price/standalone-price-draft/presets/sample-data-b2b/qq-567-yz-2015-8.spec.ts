import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20158 from './qq-567-yz-2015-8';

describe(`with qq567Yz20158 preset`, () => {
  it(`should return a qq567Yz20158 preset`, () => {
    const qq567Yz20158Preset = qq567Yz20158().build<TStandalonePriceDraft>();
    expect(qq567Yz20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2015-8",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a qq567Yz20158 preset when built for graphql`, () => {
    const qq567Yz20158PresetGraphql =
      qq567Yz20158().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2015-8",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
