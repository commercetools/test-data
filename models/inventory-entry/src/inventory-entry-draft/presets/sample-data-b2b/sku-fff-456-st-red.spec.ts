import type { TInventoryEntryDraft } from '../../../types';
import skuFff456StRed from './sku-fff-456-st-red';

describe(`with skuFff456StRed preset`, () => {
  it(`should return a skuFff456StRed preset`, () => {
    const skuFff456StRedPreset = skuFff456StRed().build<TInventoryEntryDraft>();
    expect(skuFff456StRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFff456StRed preset when built for graphql`, () => {
    const skuFff456StRedPresetGraphql =
      skuFff456StRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuFff456StRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
