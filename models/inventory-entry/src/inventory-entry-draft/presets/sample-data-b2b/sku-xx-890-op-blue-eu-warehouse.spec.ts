import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuXx890OpBlueEuWarehouse preset`, () => {
  it(`should return a skuXx890OpBlueEuWarehouse preset when built for rest`, () => {
    const skuXx890OpBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuXx890OpBlueEuWarehouse()
      .build();
    expect(skuXx890OpBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpBlueEuWarehouse preset when built for graphql`, () => {
    const skuXx890OpBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuXx890OpBlueEuWarehouse()
      .build();
    expect(skuXx890OpBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuXx890OpBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuXx890OpBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuXx890OpBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuXx890OpBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
