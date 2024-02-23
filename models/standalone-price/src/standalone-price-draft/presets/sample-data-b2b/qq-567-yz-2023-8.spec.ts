import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20238 from './qq-567-yz-2023-8';

describe(`with qq567Yz20238 preset`, () => {
  it(`should return a qq567Yz20238 preset`, () => {
    const qq567Yz20238Preset = qq567Yz20238().build<TStandalonePriceDraft>();
    expect(qq567Yz20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2023-8",
        "sku": "qq567-yz-2023",
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

  it(`should return a qq567Yz20238 preset when built for graphql`, () => {
    const qq567Yz20238PresetGraphql =
      qq567Yz20238().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2023-8",
        "sku": "qq567-yz-2023",
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
