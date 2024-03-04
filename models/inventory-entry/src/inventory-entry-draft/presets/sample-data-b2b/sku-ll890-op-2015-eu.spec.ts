import type { TInventoryEntryDraft } from '../../../types';
import skuLl890Op2015Eu from './sku-ll890-op-2015-eu';

describe(`with skuLl890Op2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuLl890Op2015Eu preset`, () => {
    const skuLl890Op2015EuPreset =
      skuLl890Op2015Eu().build<TInventoryEntryDraft>();
    expect(skuLl890Op2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLl890Op2015Eu preset when built for graphql`, () => {
    const skuLl890Op2015EuPresetGraphql =
      skuLl890Op2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuLl890Op2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
