import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20157 from './kk-567-yz-2015-7';

describe(`with kk567Yz20157 preset`, () => {
  it(`should return a kk567Yz20157 preset`, () => {
    const kk567Yz20157Preset = kk567Yz20157().build<TStandalonePriceDraft>();
    expect(kk567Yz20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-7",
        "sku": "kk567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a kk567Yz20157 preset when built for graphql`, () => {
    const kk567Yz20157PresetGraphql =
      kk567Yz20157().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-7",
        "sku": "kk567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
