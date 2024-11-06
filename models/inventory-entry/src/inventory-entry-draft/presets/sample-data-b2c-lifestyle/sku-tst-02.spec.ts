import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTst02 preset`, () => {
  it(`should return a skuTst02 preset when built for rest`, () => {
    const skuTst02Preset = InventoryEntryDraftRest.presets.skuTst02().build();
    expect(skuTst02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTst02 preset when built for graphql`, () => {
    const skuTst02Preset = InventoryEntryDraftGraphql.presets
      .skuTst02()
      .build();
    expect(skuTst02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTst02 preset when built for legacy rest`, () => {
    const skuTst02Preset = InventoryEntryDraft.presets
      .skuTst02()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTst02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTst02 preset when built for legacy graphql`, () => {
    const skuTst02Preset = InventoryEntryDraft.presets
      .skuTst02()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTst02Preset).toMatchInlineSnapshot();
  });
});
