import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDdd890OpRedEuWarehouse preset`, () => {
  it(`should return a skuDdd890OpRedEuWarehouse preset when built for rest`, () => {
    const skuDdd890OpRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuDdd890OpRedEuWarehouse()
      .build();
    expect(skuDdd890OpRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpRedEuWarehouse preset when built for graphql`, () => {
    const skuDdd890OpRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuDdd890OpRedEuWarehouse()
      .build();
    expect(skuDdd890OpRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpRedEuWarehouse preset when built for legacy rest`, () => {
    const skuDdd890OpRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDdd890OpRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuDdd890OpRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDdd890OpRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
