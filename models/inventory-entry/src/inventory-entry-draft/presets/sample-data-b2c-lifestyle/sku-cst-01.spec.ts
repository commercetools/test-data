import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCst01 preset`, () => {
  it(`should return a skuCst01 preset when built for rest`, () => {
    const skuCst01Preset = InventoryEntryDraftRest.presets.skuCst01().build();
    expect(skuCst01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCst01 preset when built for graphql`, () => {
    const skuCst01Preset = InventoryEntryDraftGraphql.presets
      .skuCst01()
      .build();
    expect(skuCst01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCst01 preset when built for legacy rest`, () => {
    const skuCst01Preset = InventoryEntryDraft.presets
      .skuCst01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCst01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCst01 preset when built for legacy graphql`, () => {
    const skuCst01Preset = InventoryEntryDraft.presets
      .skuCst01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCst01Preset).toMatchInlineSnapshot();
  });
});
