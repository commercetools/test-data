import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20198 from './gg-123-qr-2019-8';

describe(`with gg123Qr20198 preset`, () => {
  it(`should return a gg123Qr20198 preset`, () => {
    const gg123Qr20198Preset = gg123Qr20198().build<TStandalonePriceDraft>();
    expect(gg123Qr20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2019-8",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1870001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a gg123Qr20198 preset when built for graphql`, () => {
    const gg123Qr20198PresetGraphql =
      gg123Qr20198().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2019-8",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1870001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
