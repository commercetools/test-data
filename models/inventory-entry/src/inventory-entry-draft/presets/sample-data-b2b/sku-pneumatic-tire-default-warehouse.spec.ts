import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPneumaticTireDefaultWarehouse preset`, () => {
  it(`should return a skuPneumaticTireDefaultWarehouse preset when built for rest`, () => {
    const skuPneumaticTireDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuPneumaticTireDefaultWarehouse()
        .build();
    expect(skuPneumaticTireDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPneumaticTireDefaultWarehouse preset when built for graphql`, () => {
    const skuPneumaticTireDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuPneumaticTireDefaultWarehouse()
        .build();
    expect(skuPneumaticTireDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPneumaticTireDefaultWarehouse preset when built for legacy rest`, () => {
    const skuPneumaticTireDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuPneumaticTireDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPneumaticTireDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPneumaticTireDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuPneumaticTireDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuPneumaticTireDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPneumaticTireDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
