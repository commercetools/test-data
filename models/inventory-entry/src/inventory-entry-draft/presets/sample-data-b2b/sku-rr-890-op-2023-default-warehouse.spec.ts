import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRr890Op2023DefaultWarehouse preset`, () => {
  it(`should return a skuRr890Op2023DefaultWarehouse preset when built for rest`, () => {
    const skuRr890Op2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuRr890Op2023DefaultWarehouse()
      .build();
    expect(skuRr890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2023DefaultWarehouse preset when built for graphql`, () => {
    const skuRr890Op2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuRr890Op2023DefaultWarehouse()
        .build();
    expect(skuRr890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuRr890Op2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuRr890Op2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRr890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuRr890Op2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuRr890Op2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRr890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
