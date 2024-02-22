import type { TInventoryEntryDraft } from '../../../types';
import skuFff456StGreen from './sku-fff-456-st-green';

describe(`with skuFff456StGreen preset`, () => {
  it(`should return a skuFff456StGreen preset`, () => {
    const skuFff456StGreenPreset =
      skuFff456StGreen().build<TInventoryEntryDraft>();
    expect(skuFff456StGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFff456StGreen preset when built for graphql`, () => {
    const skuFff456StGreenPresetGraphql =
      skuFff456StGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuFff456StGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
