import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20193 from './qq-567-yz-2019-3';

describe(`with qq567Yz20193 preset`, () => {
  it(`should return a qq567Yz20193 preset`, () => {
    const qq567Yz20193Preset = qq567Yz20193().build<TStandalonePriceDraft>();
    expect(qq567Yz20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2019-3",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3575000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a qq567Yz20193 preset when built for graphql`, () => {
    const qq567Yz20193PresetGraphql =
      qq567Yz20193().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2019-3",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3575000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
