import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMtss01 preset`, () => {
  it(`should return a skuMtss01 preset when built for rest`, () => {
    const skuMtss01Preset = InventoryEntryDraftRest.presets.skuMtss01().build();
    expect(skuMtss01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMtss01 preset when built for graphql`, () => {
    const skuMtss01Preset = InventoryEntryDraftGraphql.presets
      .skuMtss01()
      .build();
    expect(skuMtss01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMtss01 preset when built for legacy rest`, () => {
    const skuMtss01Preset = InventoryEntryDraft.presets
      .skuMtss01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMtss01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMtss01 preset when built for legacy graphql`, () => {
    const skuMtss01Preset = InventoryEntryDraft.presets
      .skuMtss01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMtss01Preset).toMatchInlineSnapshot();
  });
});
