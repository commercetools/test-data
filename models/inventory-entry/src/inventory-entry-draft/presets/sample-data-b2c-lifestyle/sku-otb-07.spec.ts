import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuOtb07 preset`, () => {
  it(`should return a skuOtb07 preset when built for rest`, () => {
    const skuOtb07Preset = InventoryEntryDraftRest.presets.skuOtb07().build();
    expect(skuOtb07Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuOtb07 preset when built for graphql`, () => {
    const skuOtb07Preset = InventoryEntryDraftGraphql.presets
      .skuOtb07()
      .build();
    expect(skuOtb07Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuOtb07 preset when built for legacy rest`, () => {
    const skuOtb07Preset = InventoryEntryDraft.presets
      .skuOtb07()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuOtb07Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuOtb07 preset when built for legacy graphql`, () => {
    const skuOtb07Preset = InventoryEntryDraft.presets
      .skuOtb07()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuOtb07Preset).toMatchInlineSnapshot();
  });
});
