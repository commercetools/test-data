import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20237 from './gg-123-qr-2023-7';

describe(`with gg123Qr20237 preset`, () => {
  it(`should return a gg123Qr20237 preset`, () => {
    const gg123Qr20237Preset = gg123Qr20237().build<TStandalonePriceDraft>();
    expect(gg123Qr20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-7",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2040000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a gg123Qr20237 preset when built for graphql`, () => {
    const gg123Qr20237PresetGraphql =
      gg123Qr20237().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-7",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2040000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
