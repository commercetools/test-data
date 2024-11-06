import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuD234Wx2019DefaultWarehouse preset`, () => {
  it(`should return a skuD234Wx2019DefaultWarehouse preset when built for rest`, () => {
    const skuD234Wx2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuD234Wx2019DefaultWarehouse()
      .build();
    expect(skuD234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2019DefaultWarehouse preset when built for graphql`, () => {
    const skuD234Wx2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuD234Wx2019DefaultWarehouse()
        .build();
    expect(skuD234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuD234Wx2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuD234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuD234Wx2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuD234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
