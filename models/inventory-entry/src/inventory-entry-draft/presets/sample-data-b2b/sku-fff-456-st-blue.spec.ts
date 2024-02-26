import type { TInventoryEntryDraft } from '../../../types';
import skuFff456StBlue from './sku-fff-456-st-blue';

describe(`with skuFff456StBlue preset`, () => {
  it(`should return a skuFff456StBlue preset`, () => {
    const skuFff456StBluePreset =
      skuFff456StBlue().build<TInventoryEntryDraft>();
    expect(skuFff456StBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFff456StBlue preset when built for graphql`, () => {
    const skuFff456StBluePresetGraphql =
      skuFff456StBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuFff456StBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
