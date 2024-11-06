import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDdd890OpGreenEuWarehouse preset`, () => {
  it(`should return a skuDdd890OpGreenEuWarehouse preset when built for rest`, () => {
    const skuDdd890OpGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuDdd890OpGreenEuWarehouse()
      .build();
    expect(skuDdd890OpGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpGreenEuWarehouse preset when built for graphql`, () => {
    const skuDdd890OpGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuDdd890OpGreenEuWarehouse()
      .build();
    expect(skuDdd890OpGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuDdd890OpGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDdd890OpGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuDdd890OpGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDdd890OpGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
