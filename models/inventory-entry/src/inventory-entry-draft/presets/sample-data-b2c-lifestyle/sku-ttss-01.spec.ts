import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTtss01 preset`, () => {
  it(`should return a skuTtss01 preset when built for rest`, () => {
    const skuTtss01Preset = InventoryEntryDraftRest.presets.skuTtss01().build();
    expect(skuTtss01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTtss01 preset when built for graphql`, () => {
    const skuTtss01Preset = InventoryEntryDraftGraphql.presets
      .skuTtss01()
      .build();
    expect(skuTtss01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTtss01 preset when built for legacy rest`, () => {
    const skuTtss01Preset = InventoryEntryDraft.presets
      .skuTtss01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTtss01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTtss01 preset when built for legacy graphql`, () => {
    const skuTtss01Preset = InventoryEntryDraft.presets
      .skuTtss01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTtss01Preset).toMatchInlineSnapshot();
  });
});
