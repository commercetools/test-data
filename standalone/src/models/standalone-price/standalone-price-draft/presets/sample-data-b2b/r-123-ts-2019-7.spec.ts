import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20197 from './r-123-ts-2019-7';

describe(`with r123Ts20197 preset`, () => {
  it(`should return a r123Ts20197 preset`, () => {
    const r123Ts20197Preset = r123Ts20197().build<TStandalonePriceDraft>();
    expect(r123Ts20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2019-7",
        "recurrencePolicy": undefined,
        "sku": "r123-ts-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1140000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a r123Ts20197 preset when built for graphql`, () => {
    const r123Ts20197PresetGraphql =
      r123Ts20197().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2019-7",
        "recurrencePolicy": undefined,
        "sku": "r123-ts-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1140000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
