import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcg02 preset`, () => {
  it(`should return a skuCcg02 preset when built for rest`, () => {
    const skuCcg02Preset = InventoryEntryDraftRest.presets.skuCcg02().build();
    expect(skuCcg02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcg02 preset when built for graphql`, () => {
    const skuCcg02Preset = InventoryEntryDraftGraphql.presets
      .skuCcg02()
      .build();
    expect(skuCcg02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcg02 preset when built for legacy rest`, () => {
    const skuCcg02Preset = InventoryEntryDraft.presets
      .skuCcg02()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcg02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcg02 preset when built for legacy graphql`, () => {
    const skuCcg02Preset = InventoryEntryDraft.presets
      .skuCcg02()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcg02Preset).toMatchInlineSnapshot();
  });
});
