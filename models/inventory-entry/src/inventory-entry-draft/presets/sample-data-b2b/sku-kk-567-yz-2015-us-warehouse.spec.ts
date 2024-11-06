import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuKk567Yz2015UsWarehouse preset`, () => {
  it(`should return a skuKk567Yz2015UsWarehouse preset when built for rest`, () => {
    const skuKk567Yz2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuKk567Yz2015UsWarehouse()
      .build();
    expect(skuKk567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuKk567Yz2015UsWarehouse preset when built for graphql`, () => {
    const skuKk567Yz2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuKk567Yz2015UsWarehouse()
      .build();
    expect(skuKk567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuKk567Yz2015UsWarehouse preset when built for legacy rest`, () => {
    const skuKk567Yz2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuKk567Yz2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuKk567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuKk567Yz2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuKk567Yz2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuKk567Yz2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuKk567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
