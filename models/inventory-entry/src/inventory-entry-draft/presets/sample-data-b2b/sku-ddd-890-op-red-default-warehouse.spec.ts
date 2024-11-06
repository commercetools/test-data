import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDdd890OpRedDefaultWarehouse preset`, () => {
  it(`should return a skuDdd890OpRedDefaultWarehouse preset when built for rest`, () => {
    const skuDdd890OpRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuDdd890OpRedDefaultWarehouse()
      .build();
    expect(skuDdd890OpRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpRedDefaultWarehouse preset when built for graphql`, () => {
    const skuDdd890OpRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuDdd890OpRedDefaultWarehouse()
        .build();
    expect(skuDdd890OpRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuDdd890OpRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDdd890OpRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuDdd890OpRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDdd890OpRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
