import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFlas094 preset`, () => {
  it(`should return a skuFlas094 preset when built for rest`, () => {
    const skuFlas094Preset = InventoryEntryDraftRest.presets
      .skuFlas094()
      .build();
    expect(skuFlas094Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuFlas094 preset when built for graphql`, () => {
    const skuFlas094Preset = InventoryEntryDraftGraphql.presets
      .skuFlas094()
      .build();
    expect(skuFlas094Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuFlas094 preset when built for legacy rest`, () => {
    const skuFlas094Preset = InventoryEntryDraft.presets
      .skuFlas094()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFlas094Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuFlas094 preset when built for legacy graphql`, () => {
    const skuFlas094Preset = InventoryEntryDraft.presets
      .skuFlas094()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFlas094Preset).toMatchInlineSnapshot();
  });
});
