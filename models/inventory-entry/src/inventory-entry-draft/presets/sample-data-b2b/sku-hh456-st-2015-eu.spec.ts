import type { TInventoryEntryDraft } from '../../../types';
import skuHh456St2015Eu from './sku-hh456-st-2015-eu';

describe(`with skuHh456St2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuHh456St2015Eu preset`, () => {
    const skuHh456St2015EuPreset =
      skuHh456St2015Eu().build<TInventoryEntryDraft>();
    expect(skuHh456St2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHh456St2015Eu preset when built for graphql`, () => {
    const skuHh456St2015EuPresetGraphql =
      skuHh456St2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuHh456St2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
