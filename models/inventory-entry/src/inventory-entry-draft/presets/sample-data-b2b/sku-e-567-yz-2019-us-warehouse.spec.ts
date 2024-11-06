import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuE567Yz2019UsWarehouse preset`, () => {
  it(`should return a skuE567Yz2019UsWarehouse preset when built for rest`, () => {
    const skuE567Yz2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuE567Yz2019UsWarehouse()
      .build();
    expect(skuE567Yz2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2019UsWarehouse preset when built for graphql`, () => {
    const skuE567Yz2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuE567Yz2019UsWarehouse()
      .build();
    expect(skuE567Yz2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2019UsWarehouse preset when built for legacy rest`, () => {
    const skuE567Yz2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuE567Yz2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuE567Yz2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuE567Yz2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuE567Yz2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuE567Yz2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
