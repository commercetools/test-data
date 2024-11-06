import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJjj890OpGreenDefaultWarehouse preset`, () => {
  it(`should return a skuJjj890OpGreenDefaultWarehouse preset when built for rest`, () => {
    const skuJjj890OpGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuJjj890OpGreenDefaultWarehouse()
        .build();
    expect(skuJjj890OpGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuJjj890OpGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuJjj890OpGreenDefaultWarehouse()
        .build();
    expect(skuJjj890OpGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuJjj890OpGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJjj890OpGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuJjj890OpGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJjj890OpGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
