import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLl890Op2019DefaultWarehouse preset`, () => {
  it(`should return a skuLl890Op2019DefaultWarehouse preset when built for rest`, () => {
    const skuLl890Op2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuLl890Op2019DefaultWarehouse()
      .build();
    expect(skuLl890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2019DefaultWarehouse preset when built for graphql`, () => {
    const skuLl890Op2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuLl890Op2019DefaultWarehouse()
        .build();
    expect(skuLl890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuLl890Op2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLl890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuLl890Op2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLl890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
