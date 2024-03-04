import type { TInventoryEntryDraft } from '../../../types';
import skuFf890Op2015Eu from './sku-ff890-op-2015-eu';

describe(`with skuFf890Op2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuFf890Op2015Eu preset`, () => {
    const skuFf890Op2015EuPreset =
      skuFf890Op2015Eu().build<TInventoryEntryDraft>();
    expect(skuFf890Op2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFf890Op2015Eu preset when built for graphql`, () => {
    const skuFf890Op2015EuPresetGraphql =
      skuFf890Op2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuFf890Op2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
