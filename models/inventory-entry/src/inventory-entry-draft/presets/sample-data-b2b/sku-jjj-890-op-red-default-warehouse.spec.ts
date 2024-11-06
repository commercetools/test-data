import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJjj890OpRedDefaultWarehouse preset`, () => {
  it(`should return a skuJjj890OpRedDefaultWarehouse preset when built for rest`, () => {
    const skuJjj890OpRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuJjj890OpRedDefaultWarehouse()
      .build();
    expect(skuJjj890OpRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpRedDefaultWarehouse preset when built for graphql`, () => {
    const skuJjj890OpRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuJjj890OpRedDefaultWarehouse()
        .build();
    expect(skuJjj890OpRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuJjj890OpRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJjj890OpRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuJjj890OpRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJjj890OpRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
