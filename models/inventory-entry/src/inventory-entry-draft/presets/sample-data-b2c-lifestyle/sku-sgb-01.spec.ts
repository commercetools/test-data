import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSgb01 preset`, () => {
  it(`should return a skuSgb01 preset when built for rest`, () => {
    const skuSgb01Preset = InventoryEntryDraftRest.presets.skuSgb01().build();
    expect(skuSgb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSgb01 preset when built for graphql`, () => {
    const skuSgb01Preset = InventoryEntryDraftGraphql.presets
      .skuSgb01()
      .build();
    expect(skuSgb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSgb01 preset when built for legacy rest`, () => {
    const skuSgb01Preset = InventoryEntryDraft.presets
      .skuSgb01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSgb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSgb01 preset when built for legacy graphql`, () => {
    const skuSgb01Preset = InventoryEntryDraft.presets
      .skuSgb01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSgb01Preset).toMatchInlineSnapshot();
  });
});
