import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuY567Yz2015EuWarehouse preset`, () => {
  it(`should return a skuY567Yz2015EuWarehouse preset when built for rest`, () => {
    const skuY567Yz2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuY567Yz2015EuWarehouse()
      .build();
    expect(skuY567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2015EuWarehouse preset when built for graphql`, () => {
    const skuY567Yz2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuY567Yz2015EuWarehouse()
      .build();
    expect(skuY567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2015EuWarehouse preset when built for legacy rest`, () => {
    const skuY567Yz2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuY567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuY567Yz2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuY567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
