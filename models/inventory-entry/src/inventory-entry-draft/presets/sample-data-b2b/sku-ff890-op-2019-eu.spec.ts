import type { TInventoryEntryDraft } from '../../../types';
import skuFf890Op2019Eu from './sku-ff890-op-2019-eu';

describe(`with skuFf890Op2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuFf890Op2019Eu preset`, () => {
    const skuFf890Op2019EuPreset =
      skuFf890Op2019Eu().build<TInventoryEntryDraft>();
    expect(skuFf890Op2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFf890Op2019Eu preset when built for graphql`, () => {
    const skuFf890Op2019EuPresetGraphql =
      skuFf890Op2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuFf890Op2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
