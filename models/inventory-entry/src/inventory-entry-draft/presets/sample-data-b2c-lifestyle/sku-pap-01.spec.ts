import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPap01 preset`, () => {
  it(`should return a skuPap01 preset when built for rest`, () => {
    const skuPap01Preset = InventoryEntryDraftRest.presets.skuPap01().build();
    expect(skuPap01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuPap01 preset when built for graphql`, () => {
    const skuPap01Preset = InventoryEntryDraftGraphql.presets
      .skuPap01()
      .build();
    expect(skuPap01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuPap01 preset when built for legacy rest`, () => {
    const skuPap01Preset = InventoryEntryDraft.presets
      .skuPap01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPap01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuPap01 preset when built for legacy graphql`, () => {
    const skuPap01Preset = InventoryEntryDraft.presets
      .skuPap01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPap01Preset).toMatchInlineSnapshot();
  });
});
