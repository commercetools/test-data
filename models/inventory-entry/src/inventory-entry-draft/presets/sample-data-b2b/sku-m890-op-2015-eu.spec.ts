import type { TInventoryEntryDraft } from '../../../types';
import skuM890Op2015Eu from './sku-m890-op-2015-eu';

describe(`with skuM890Op2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuM890Op2015Eu preset`, () => {
    const skuM890Op2015EuPreset =
      skuM890Op2015Eu().build<TInventoryEntryDraft>();
    expect(skuM890Op2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuM890Op2015Eu preset when built for graphql`, () => {
    const skuM890Op2015EuPresetGraphql =
      skuM890Op2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuM890Op2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
