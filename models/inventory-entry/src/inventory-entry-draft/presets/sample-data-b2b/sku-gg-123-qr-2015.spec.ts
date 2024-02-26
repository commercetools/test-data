import type { TInventoryEntryDraft } from '../../../types';
import skuGg123Qr2015 from './sku-gg-123-qr-2015';

describe(`with skuGg123Qr2015 preset`, () => {
  it(`should return a skuGg123Qr2015 preset`, () => {
    const skuGg123Qr2015Preset = skuGg123Qr2015().build<TInventoryEntryDraft>();
    expect(skuGg123Qr2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGg123Qr2015 preset when built for graphql`, () => {
    const skuGg123Qr2015PresetGraphql =
      skuGg123Qr2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuGg123Qr2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
