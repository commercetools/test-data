import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuK567Yz2019UsWarehouse preset`, () => {
  it(`should return a skuK567Yz2019UsWarehouse preset when built for rest`, () => {
    const skuK567Yz2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuK567Yz2019UsWarehouse()
      .build();
    expect(skuK567Yz2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2019UsWarehouse preset when built for graphql`, () => {
    const skuK567Yz2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuK567Yz2019UsWarehouse()
      .build();
    expect(skuK567Yz2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2019UsWarehouse preset when built for legacy rest`, () => {
    const skuK567Yz2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuK567Yz2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuK567Yz2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuK567Yz2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
