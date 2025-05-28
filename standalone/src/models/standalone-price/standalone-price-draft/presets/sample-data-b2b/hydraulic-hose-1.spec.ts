import type { TStandalonePriceDraft } from '../../../types';
import hydraulicHose1 from './hydraulic-hose-1';

describe(`with hydraulicHose1 preset`, () => {
  it(`should return a hydraulicHose1 preset`, () => {
    const hydraulicHose1Preset =
      hydraulicHose1().build<TStandalonePriceDraft>();
    expect(hydraulicHose1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hydraulic-hose-1",
        "recurrencePolicy": undefined,
        "sku": "hydraulic-hose",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7500,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a hydraulicHose1 preset when built for graphql`, () => {
    const hydraulicHose1PresetGraphql =
      hydraulicHose1().buildGraphql<TStandalonePriceDraft>();
    expect(hydraulicHose1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hydraulic-hose-1",
        "recurrencePolicy": undefined,
        "sku": "hydraulic-hose",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7500,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
