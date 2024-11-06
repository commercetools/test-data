import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuM890Op2023UsWarehouse preset`, () => {
  it(`should return a skuM890Op2023UsWarehouse preset when built for rest`, () => {
    const skuM890Op2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuM890Op2023UsWarehouse()
      .build();
    expect(skuM890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2023UsWarehouse preset when built for graphql`, () => {
    const skuM890Op2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuM890Op2023UsWarehouse()
      .build();
    expect(skuM890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2023UsWarehouse preset when built for legacy rest`, () => {
    const skuM890Op2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuM890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuM890Op2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuM890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
