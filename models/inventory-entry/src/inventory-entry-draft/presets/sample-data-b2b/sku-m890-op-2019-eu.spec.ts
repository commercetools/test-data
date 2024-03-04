import type { TInventoryEntryDraft } from '../../../types';
import skuM890Op2019Eu from './sku-m890-op-2019-eu';

describe(`with skuM890Op2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuM890Op2019Eu preset`, () => {
    const skuM890Op2019EuPreset =
      skuM890Op2019Eu().build<TInventoryEntryDraft>();
    expect(skuM890Op2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuM890Op2019Eu preset when built for graphql`, () => {
    const skuM890Op2019EuPresetGraphql =
      skuM890Op2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuM890Op2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
