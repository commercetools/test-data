import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuH456St2019UsWarehouse preset`, () => {
  it(`should return a skuH456St2019UsWarehouse preset when built for rest`, () => {
    const skuH456St2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuH456St2019UsWarehouse()
      .build();
    expect(skuH456St2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2019UsWarehouse preset when built for graphql`, () => {
    const skuH456St2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuH456St2019UsWarehouse()
      .build();
    expect(skuH456St2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2019UsWarehouse preset when built for legacy rest`, () => {
    const skuH456St2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuH456St2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuH456St2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuH456St2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
