import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBb456St2019UsWarehouse preset`, () => {
  it(`should return a skuBb456St2019UsWarehouse preset when built for rest`, () => {
    const skuBb456St2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuBb456St2019UsWarehouse()
      .build();
    expect(skuBb456St2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBb456St2019UsWarehouse preset when built for graphql`, () => {
    const skuBb456St2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuBb456St2019UsWarehouse()
      .build();
    expect(skuBb456St2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBb456St2019UsWarehouse preset when built for legacy rest`, () => {
    const skuBb456St2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuBb456St2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBb456St2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBb456St2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuBb456St2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuBb456St2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBb456St2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
