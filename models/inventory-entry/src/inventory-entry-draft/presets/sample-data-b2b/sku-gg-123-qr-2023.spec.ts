import type { TInventoryEntryDraft } from '../../../types';
import skuGg123Qr2023 from './sku-gg-123-qr-2023';

describe(`with skuGg123Qr2023 preset`, () => {
  it(`should return a skuGg123Qr2023 preset`, () => {
    const skuGg123Qr2023Preset = skuGg123Qr2023().build<TInventoryEntryDraft>();
    expect(skuGg123Qr2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGg123Qr2023 preset when built for graphql`, () => {
    const skuGg123Qr2023PresetGraphql =
      skuGg123Qr2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuGg123Qr2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
