import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20196 from './qq-567-yz-2019-6';

describe(`with qq567Yz20196 preset`, () => {
  it(`should return a qq567Yz20196 preset`, () => {
    const qq567Yz20196Preset = qq567Yz20196().build<TStandalonePriceDraft>();
    expect(qq567Yz20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2019-6",
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a qq567Yz20196 preset when built for graphql`, () => {
    const qq567Yz20196PresetGraphql =
      qq567Yz20196().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2019-6",
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
