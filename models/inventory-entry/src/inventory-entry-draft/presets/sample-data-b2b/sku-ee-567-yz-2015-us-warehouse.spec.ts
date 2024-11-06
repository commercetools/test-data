import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEe567Yz2015UsWarehouse preset`, () => {
  it(`should return a skuEe567Yz2015UsWarehouse preset when built for rest`, () => {
    const skuEe567Yz2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuEe567Yz2015UsWarehouse()
      .build();
    expect(skuEe567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2015UsWarehouse preset when built for graphql`, () => {
    const skuEe567Yz2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuEe567Yz2015UsWarehouse()
      .build();
    expect(skuEe567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2015UsWarehouse preset when built for legacy rest`, () => {
    const skuEe567Yz2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuEe567Yz2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEe567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuEe567Yz2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuEe567Yz2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEe567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
