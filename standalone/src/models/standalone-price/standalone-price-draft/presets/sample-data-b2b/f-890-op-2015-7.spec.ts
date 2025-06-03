import type { TStandalonePriceDraft } from '../../../types';
import f890Op20157 from './f-890-op-2015-7';

describe(`with f890Op20157 preset`, () => {
  it(`should return a f890Op20157 preset`, () => {
    const f890Op20157Preset = f890Op20157().build<TStandalonePriceDraft>();
    expect(f890Op20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2015-7",
        "recurrencePolicy": undefined,
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a f890Op20157 preset when built for graphql`, () => {
    const f890Op20157PresetGraphql =
      f890Op20157().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2015-7",
        "recurrencePolicy": undefined,
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
