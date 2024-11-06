import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRr890Op2019DefaultWarehouse preset`, () => {
  it(`should return a skuRr890Op2019DefaultWarehouse preset when built for rest`, () => {
    const skuRr890Op2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuRr890Op2019DefaultWarehouse()
      .build();
    expect(skuRr890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2019DefaultWarehouse preset when built for graphql`, () => {
    const skuRr890Op2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuRr890Op2019DefaultWarehouse()
        .build();
    expect(skuRr890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuRr890Op2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuRr890Op2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRr890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuRr890Op2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuRr890Op2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRr890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
