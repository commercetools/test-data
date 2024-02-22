import type { TInventoryEntryDraft } from '../../../types';
import skuGg123Qr2019 from './sku-gg-123-qr-2019';

describe(`with skuGg123Qr2019 preset`, () => {
  it(`should return a skuGg123Qr2019 preset`, () => {
    const skuGg123Qr2019Preset = skuGg123Qr2019().build<TInventoryEntryDraft>();
    expect(skuGg123Qr2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGg123Qr2019 preset when built for graphql`, () => {
    const skuGg123Qr2019PresetGraphql =
      skuGg123Qr2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuGg123Qr2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
