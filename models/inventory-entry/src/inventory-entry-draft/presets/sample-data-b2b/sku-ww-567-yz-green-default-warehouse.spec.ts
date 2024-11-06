import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWw567YzGreenDefaultWarehouse preset`, () => {
  it(`should return a skuWw567YzGreenDefaultWarehouse preset when built for rest`, () => {
    const skuWw567YzGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuWw567YzGreenDefaultWarehouse().build();
    expect(skuWw567YzGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuWw567YzGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuWw567YzGreenDefaultWarehouse()
        .build();
    expect(skuWw567YzGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuWw567YzGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWw567YzGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuWw567YzGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWw567YzGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
