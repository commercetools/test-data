import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuXx890OpRedUsWarehouse preset`, () => {
  it(`should return a skuXx890OpRedUsWarehouse preset when built for rest`, () => {
    const skuXx890OpRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuXx890OpRedUsWarehouse()
      .build();
    expect(skuXx890OpRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpRedUsWarehouse preset when built for graphql`, () => {
    const skuXx890OpRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuXx890OpRedUsWarehouse()
      .build();
    expect(skuXx890OpRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpRedUsWarehouse preset when built for legacy rest`, () => {
    const skuXx890OpRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuXx890OpRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuXx890OpRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuXx890OpRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
