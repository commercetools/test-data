import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZ890Op2023UsWarehouse preset`, () => {
  it(`should return a skuZ890Op2023UsWarehouse preset when built for rest`, () => {
    const skuZ890Op2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuZ890Op2023UsWarehouse()
      .build();
    expect(skuZ890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2023UsWarehouse preset when built for graphql`, () => {
    const skuZ890Op2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuZ890Op2023UsWarehouse()
      .build();
    expect(skuZ890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2023UsWarehouse preset when built for legacy rest`, () => {
    const skuZ890Op2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZ890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuZ890Op2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZ890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
