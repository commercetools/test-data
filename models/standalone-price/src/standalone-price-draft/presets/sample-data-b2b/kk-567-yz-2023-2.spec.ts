import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20232 from './kk-567-yz-2023-2';

describe(`with kk567Yz20232 preset`, () => {
  it(`should return a kk567Yz20232 preset`, () => {
    const kk567Yz20232Preset = kk567Yz20232().build<TStandalonePriceDraft>();
    expect(kk567Yz20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2023-2",
        "sku": "kk567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3630001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a kk567Yz20232 preset when built for graphql`, () => {
    const kk567Yz20232PresetGraphql =
      kk567Yz20232().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2023-2",
        "sku": "kk567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3630001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
