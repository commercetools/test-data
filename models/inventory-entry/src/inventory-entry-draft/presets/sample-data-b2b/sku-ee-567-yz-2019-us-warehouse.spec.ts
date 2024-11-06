import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEe567Yz2019UsWarehouse preset`, () => {
  it(`should return a skuEe567Yz2019UsWarehouse preset when built for rest`, () => {
    const skuEe567Yz2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuEe567Yz2019UsWarehouse()
      .build();
    expect(skuEe567Yz2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2019UsWarehouse preset when built for graphql`, () => {
    const skuEe567Yz2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuEe567Yz2019UsWarehouse()
      .build();
    expect(skuEe567Yz2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2019UsWarehouse preset when built for legacy rest`, () => {
    const skuEe567Yz2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuEe567Yz2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEe567Yz2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuEe567Yz2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuEe567Yz2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEe567Yz2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
