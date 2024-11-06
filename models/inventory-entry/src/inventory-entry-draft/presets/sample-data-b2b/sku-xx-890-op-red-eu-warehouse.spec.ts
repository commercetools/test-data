import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuXx890OpRedEuWarehouse preset`, () => {
  it(`should return a skuXx890OpRedEuWarehouse preset when built for rest`, () => {
    const skuXx890OpRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuXx890OpRedEuWarehouse()
      .build();
    expect(skuXx890OpRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpRedEuWarehouse preset when built for graphql`, () => {
    const skuXx890OpRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuXx890OpRedEuWarehouse()
      .build();
    expect(skuXx890OpRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpRedEuWarehouse preset when built for legacy rest`, () => {
    const skuXx890OpRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuXx890OpRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuXx890OpRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuXx890OpRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
