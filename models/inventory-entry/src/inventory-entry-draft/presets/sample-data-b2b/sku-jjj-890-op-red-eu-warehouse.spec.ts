import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJjj890OpRedEuWarehouse preset`, () => {
  it(`should return a skuJjj890OpRedEuWarehouse preset when built for rest`, () => {
    const skuJjj890OpRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuJjj890OpRedEuWarehouse()
      .build();
    expect(skuJjj890OpRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpRedEuWarehouse preset when built for graphql`, () => {
    const skuJjj890OpRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJjj890OpRedEuWarehouse()
      .build();
    expect(skuJjj890OpRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpRedEuWarehouse preset when built for legacy rest`, () => {
    const skuJjj890OpRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJjj890OpRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuJjj890OpRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJjj890OpRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
