import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20195 from './kk-567-yz-2019-5';

describe(`with kk567Yz20195 preset`, () => {
  it(`should return a kk567Yz20195 preset`, () => {
    const kk567Yz20195Preset = kk567Yz20195().build<TStandalonePriceDraft>();
    expect(kk567Yz20195Preset).toMatchInlineSnapshot(`
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
        "key": "kk567-yz-2019-5",
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2700000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a kk567Yz20195 preset when built for graphql`, () => {
    const kk567Yz20195PresetGraphql =
      kk567Yz20195().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20195PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "kk567-yz-2019-5",
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2700000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
