import type { TInventoryEntryDraft } from '../../../types';
import skuFff456StGreenEu from './sku-fff456-st-green-eu';

describe(`with skuFff456StGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuFff456StGreenEu preset`, () => {
    const skuFff456StGreenEuPreset =
      skuFff456StGreenEu().build<TInventoryEntryDraft>();
    expect(skuFff456StGreenEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFff456StGreenEu preset when built for graphql`, () => {
    const skuFff456StGreenEuPresetGraphql =
      skuFff456StGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuFff456StGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
