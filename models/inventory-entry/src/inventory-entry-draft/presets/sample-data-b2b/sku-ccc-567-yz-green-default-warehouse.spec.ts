import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcc567YzGreenDefaultWarehouse preset`, () => {
  it(`should return a skuCcc567YzGreenDefaultWarehouse preset when built for rest`, () => {
    const skuCcc567YzGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuCcc567YzGreenDefaultWarehouse()
        .build();
    expect(skuCcc567YzGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuCcc567YzGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuCcc567YzGreenDefaultWarehouse()
        .build();
    expect(skuCcc567YzGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuCcc567YzGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc567YzGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuCcc567YzGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc567YzGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
