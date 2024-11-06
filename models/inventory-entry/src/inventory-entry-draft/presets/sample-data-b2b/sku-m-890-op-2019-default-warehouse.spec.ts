import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuM890Op2019DefaultWarehouse preset`, () => {
  it(`should return a skuM890Op2019DefaultWarehouse preset when built for rest`, () => {
    const skuM890Op2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuM890Op2019DefaultWarehouse()
      .build();
    expect(skuM890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2019DefaultWarehouse preset when built for graphql`, () => {
    const skuM890Op2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuM890Op2019DefaultWarehouse()
        .build();
    expect(skuM890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuM890Op2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuM890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuM890Op2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuM890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
