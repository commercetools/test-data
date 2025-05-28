import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20231 from './kk-567-yz-2023-1';

describe(`with kk567Yz20231 preset`, () => {
  it(`should return a kk567Yz20231 preset`, () => {
    const kk567Yz20231Preset = kk567Yz20231().build<TStandalonePriceDraft>();
    expect(kk567Yz20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2023-1",
        "recurrencePolicy": undefined,
        "sku": "kk567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3960000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a kk567Yz20231 preset when built for graphql`, () => {
    const kk567Yz20231PresetGraphql =
      kk567Yz20231().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2023-1",
        "recurrencePolicy": undefined,
        "sku": "kk567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3960000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
