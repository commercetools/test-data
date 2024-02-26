import type { TInventoryEntryDraft } from '../../../types';
import skuAa123Qr2023 from './sku-aa-123-qr-2023';

describe(`with skuAa123Qr2023 preset`, () => {
  it(`should return a skuAa123Qr2023 preset`, () => {
    const skuAa123Qr2023Preset = skuAa123Qr2023().build<TInventoryEntryDraft>();
    expect(skuAa123Qr2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAa123Qr2023 preset when built for graphql`, () => {
    const skuAa123Qr2023PresetGraphql =
      skuAa123Qr2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuAa123Qr2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
