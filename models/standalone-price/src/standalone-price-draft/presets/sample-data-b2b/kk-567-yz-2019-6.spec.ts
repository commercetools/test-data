import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20196 from './kk-567-yz-2019-6';

describe(`with kk567Yz20196 preset`, () => {
  it(`should return a kk567Yz20196 preset`, () => {
    const kk567Yz20196Preset = kk567Yz20196().build<TStandalonePriceDraft>();
    expect(kk567Yz20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2019-6",
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a kk567Yz20196 preset when built for graphql`, () => {
    const kk567Yz20196PresetGraphql =
      kk567Yz20196().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2019-6",
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
