import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20192 from './qq-567-yz-2019-2';

describe(`with qq567Yz20192 preset`, () => {
  it(`should return a qq567Yz20192 preset`, () => {
    const qq567Yz20192Preset = qq567Yz20192().build<TStandalonePriceDraft>();
    expect(qq567Yz20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2019-2",
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a qq567Yz20192 preset when built for graphql`, () => {
    const qq567Yz20192PresetGraphql =
      qq567Yz20192().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2019-2",
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
