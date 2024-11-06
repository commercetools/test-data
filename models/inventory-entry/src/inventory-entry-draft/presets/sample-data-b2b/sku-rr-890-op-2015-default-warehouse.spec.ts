import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRr890Op2015DefaultWarehouse preset`, () => {
  it(`should return a skuRr890Op2015DefaultWarehouse preset when built for rest`, () => {
    const skuRr890Op2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuRr890Op2015DefaultWarehouse()
      .build();
    expect(skuRr890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2015DefaultWarehouse preset when built for graphql`, () => {
    const skuRr890Op2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuRr890Op2015DefaultWarehouse()
        .build();
    expect(skuRr890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuRr890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuRr890Op2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRr890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuRr890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuRr890Op2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRr890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
