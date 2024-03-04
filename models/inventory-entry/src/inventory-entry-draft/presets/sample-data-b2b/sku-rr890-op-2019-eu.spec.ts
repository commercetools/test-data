import type { TInventoryEntryDraft } from '../../../types';
import skuRr890Op2019Eu from './sku-rr890-op-2019-eu';

describe(`with skuRr890Op2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuRr890Op2019Eu preset`, () => {
    const skuRr890Op2019EuPreset =
      skuRr890Op2019Eu().build<TInventoryEntryDraft>();
    expect(skuRr890Op2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRr890Op2019Eu preset when built for graphql`, () => {
    const skuRr890Op2019EuPresetGraphql =
      skuRr890Op2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuRr890Op2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
