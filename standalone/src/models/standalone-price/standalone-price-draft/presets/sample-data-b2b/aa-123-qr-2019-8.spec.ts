import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20198 from './aa-123-qr-2019-8';

describe(`with aa123Qr20198 preset`, () => {
  it(`should return a aa123Qr20198 preset`, () => {
    const aa123Qr20198Preset = aa123Qr20198().build<TStandalonePriceDraft>();
    expect(aa123Qr20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2019-8",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aa123Qr20198 preset when built for graphql`, () => {
    const aa123Qr20198PresetGraphql =
      aa123Qr20198().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2019-8",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
