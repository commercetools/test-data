import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIii567YzGreenDefaultWarehouse preset`, () => {
  it(`should return a skuIii567YzGreenDefaultWarehouse preset when built for rest`, () => {
    const skuIii567YzGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuIii567YzGreenDefaultWarehouse()
        .build();
    expect(skuIii567YzGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuIii567YzGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuIii567YzGreenDefaultWarehouse()
        .build();
    expect(skuIii567YzGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
