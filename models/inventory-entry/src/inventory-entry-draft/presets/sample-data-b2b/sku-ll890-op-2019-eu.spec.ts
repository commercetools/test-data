import type { TInventoryEntryDraft } from '../../../types';
import skuLl890Op2019Eu from './sku-ll890-op-2019-eu';

describe(`with skuLl890Op2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuLl890Op2019Eu preset`, () => {
    const skuLl890Op2019EuPreset =
      skuLl890Op2019Eu().build<TInventoryEntryDraft>();
    expect(skuLl890Op2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuLl890Op2019Eu preset when built for graphql`, () => {
    const skuLl890Op2019EuPresetGraphql =
      skuLl890Op2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuLl890Op2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
