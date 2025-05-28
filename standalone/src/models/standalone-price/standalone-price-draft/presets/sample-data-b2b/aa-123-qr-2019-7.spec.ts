import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20197 from './aa-123-qr-2019-7';

describe(`with aa123Qr20197 preset`, () => {
  it(`should return a aa123Qr20197 preset`, () => {
    const aa123Qr20197Preset = aa123Qr20197().build<TStandalonePriceDraft>();
    expect(aa123Qr20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2019-7",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1440000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aa123Qr20197 preset when built for graphql`, () => {
    const aa123Qr20197PresetGraphql =
      aa123Qr20197().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2019-7",
        "recurrencePolicy": undefined,
        "sku": "aa123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1440000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
