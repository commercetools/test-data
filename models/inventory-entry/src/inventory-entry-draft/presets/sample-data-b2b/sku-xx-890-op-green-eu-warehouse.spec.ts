import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuXx890OpGreenEuWarehouse preset`, () => {
  it(`should return a skuXx890OpGreenEuWarehouse preset when built for rest`, () => {
    const skuXx890OpGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuXx890OpGreenEuWarehouse()
      .build();
    expect(skuXx890OpGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpGreenEuWarehouse preset when built for graphql`, () => {
    const skuXx890OpGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuXx890OpGreenEuWarehouse()
      .build();
    expect(skuXx890OpGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuXx890OpGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuXx890OpGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuXx890OpGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuXx890OpGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
