import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20192 from './kk-567-yz-2019-2';

describe(`with kk567Yz20192 preset`, () => {
  it(`should return a kk567Yz20192 preset`, () => {
    const kk567Yz20192Preset = kk567Yz20192().build<TStandalonePriceDraft>();
    expect(kk567Yz20192Preset).toMatchInlineSnapshot(`
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
        "key": "kk567-yz-2019-2",
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a kk567Yz20192 preset when built for graphql`, () => {
    const kk567Yz20192PresetGraphql =
      kk567Yz20192().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20192PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "kk567-yz-2019-2",
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
