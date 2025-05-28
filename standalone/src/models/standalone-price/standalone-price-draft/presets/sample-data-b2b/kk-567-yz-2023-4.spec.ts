import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20234 from './kk-567-yz-2023-4';

describe(`with kk567Yz20234 preset`, () => {
  it(`should return a kk567Yz20234 preset`, () => {
    const kk567Yz20234Preset = kk567Yz20234().build<TStandalonePriceDraft>();
    expect(kk567Yz20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2023-4",
        "recurrencePolicy": undefined,
        "sku": "kk567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a kk567Yz20234 preset when built for graphql`, () => {
    const kk567Yz20234PresetGraphql =
      kk567Yz20234().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2023-4",
        "recurrencePolicy": undefined,
        "sku": "kk567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
