import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJjj890OpGreenEuWarehouse preset`, () => {
  it(`should return a skuJjj890OpGreenEuWarehouse preset when built for rest`, () => {
    const skuJjj890OpGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuJjj890OpGreenEuWarehouse()
      .build();
    expect(skuJjj890OpGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpGreenEuWarehouse preset when built for graphql`, () => {
    const skuJjj890OpGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJjj890OpGreenEuWarehouse()
      .build();
    expect(skuJjj890OpGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuJjj890OpGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJjj890OpGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuJjj890OpGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJjj890OpGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
