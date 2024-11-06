import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFff456StGreenUsWarehouse preset`, () => {
  it(`should return a skuFff456StGreenUsWarehouse preset when built for rest`, () => {
    const skuFff456StGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuFff456StGreenUsWarehouse()
      .build();
    expect(skuFff456StGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StGreenUsWarehouse preset when built for graphql`, () => {
    const skuFff456StGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuFff456StGreenUsWarehouse()
      .build();
    expect(skuFff456StGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuFff456StGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFff456StGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuFff456StGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFff456StGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
