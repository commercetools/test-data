import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIii567YzGreenUsWarehouse preset`, () => {
  it(`should return a skuIii567YzGreenUsWarehouse preset when built for rest`, () => {
    const skuIii567YzGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuIii567YzGreenUsWarehouse()
      .build();
    expect(skuIii567YzGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzGreenUsWarehouse preset when built for graphql`, () => {
    const skuIii567YzGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuIii567YzGreenUsWarehouse()
      .build();
    expect(skuIii567YzGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
