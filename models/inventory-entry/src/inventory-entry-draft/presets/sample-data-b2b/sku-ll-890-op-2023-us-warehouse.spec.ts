import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLl890Op2023UsWarehouse preset`, () => {
  it(`should return a skuLl890Op2023UsWarehouse preset when built for rest`, () => {
    const skuLl890Op2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuLl890Op2023UsWarehouse()
      .build();
    expect(skuLl890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2023UsWarehouse preset when built for graphql`, () => {
    const skuLl890Op2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuLl890Op2023UsWarehouse()
      .build();
    expect(skuLl890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2023UsWarehouse preset when built for legacy rest`, () => {
    const skuLl890Op2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLl890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuLl890Op2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLl890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
