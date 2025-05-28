import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20197 from './p-234-qw-2019-7';

describe(`with p234Qw20197 preset`, () => {
  it(`should return a p234Qw20197 preset`, () => {
    const p234Qw20197Preset = p234Qw20197().build<TStandalonePriceDraft>();
    expect(p234Qw20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2019-7",
        "recurrencePolicy": undefined,
        "sku": "p234-qw-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1020000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a p234Qw20197 preset when built for graphql`, () => {
    const p234Qw20197PresetGraphql =
      p234Qw20197().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2019-7",
        "recurrencePolicy": undefined,
        "sku": "p234-qw-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1020000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
