import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDdd890OpGreenDefaultWarehouse preset`, () => {
  it(`should return a skuDdd890OpGreenDefaultWarehouse preset when built for rest`, () => {
    const skuDdd890OpGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuDdd890OpGreenDefaultWarehouse()
        .build();
    expect(skuDdd890OpGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuDdd890OpGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuDdd890OpGreenDefaultWarehouse()
        .build();
    expect(skuDdd890OpGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuDdd890OpGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDdd890OpGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuDdd890OpGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDdd890OpGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
