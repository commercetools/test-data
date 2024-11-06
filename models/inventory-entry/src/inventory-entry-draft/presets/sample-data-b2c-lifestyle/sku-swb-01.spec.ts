import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSwb01 preset`, () => {
  it(`should return a skuSwb01 preset when built for rest`, () => {
    const skuSwb01Preset = InventoryEntryDraftRest.presets.skuSwb01().build();
    expect(skuSwb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSwb01 preset when built for graphql`, () => {
    const skuSwb01Preset = InventoryEntryDraftGraphql.presets
      .skuSwb01()
      .build();
    expect(skuSwb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSwb01 preset when built for legacy rest`, () => {
    const skuSwb01Preset = InventoryEntryDraft.presets
      .skuSwb01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSwb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSwb01 preset when built for legacy graphql`, () => {
    const skuSwb01Preset = InventoryEntryDraft.presets
      .skuSwb01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSwb01Preset).toMatchInlineSnapshot();
  });
});
