import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuH456St2023UsWarehouse preset`, () => {
  it(`should return a skuH456St2023UsWarehouse preset when built for rest`, () => {
    const skuH456St2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuH456St2023UsWarehouse()
      .build();
    expect(skuH456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2023UsWarehouse preset when built for graphql`, () => {
    const skuH456St2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuH456St2023UsWarehouse()
      .build();
    expect(skuH456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2023UsWarehouse preset when built for legacy rest`, () => {
    const skuH456St2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuH456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuH456St2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuH456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
