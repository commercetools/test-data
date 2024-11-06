import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNtss01 preset`, () => {
  it(`should return a skuNtss01 preset when built for rest`, () => {
    const skuNtss01Preset = InventoryEntryDraftRest.presets.skuNtss01().build();
    expect(skuNtss01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss01 preset when built for graphql`, () => {
    const skuNtss01Preset = InventoryEntryDraftGraphql.presets
      .skuNtss01()
      .build();
    expect(skuNtss01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss01 preset when built for legacy rest`, () => {
    const skuNtss01Preset = InventoryEntryDraft.presets
      .skuNtss01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtss01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss01 preset when built for legacy graphql`, () => {
    const skuNtss01Preset = InventoryEntryDraft.presets
      .skuNtss01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtss01Preset).toMatchInlineSnapshot();
  });
});
