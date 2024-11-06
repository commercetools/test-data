import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSgb02 preset`, () => {
  it(`should return a skuSgb02 preset when built for rest`, () => {
    const skuSgb02Preset = InventoryEntryDraftRest.presets.skuSgb02().build();
    expect(skuSgb02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSgb02 preset when built for graphql`, () => {
    const skuSgb02Preset = InventoryEntryDraftGraphql.presets
      .skuSgb02()
      .build();
    expect(skuSgb02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSgb02 preset when built for legacy rest`, () => {
    const skuSgb02Preset = InventoryEntryDraft.presets
      .skuSgb02()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSgb02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSgb02 preset when built for legacy graphql`, () => {
    const skuSgb02Preset = InventoryEntryDraft.presets
      .skuSgb02()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSgb02Preset).toMatchInlineSnapshot();
  });
});
