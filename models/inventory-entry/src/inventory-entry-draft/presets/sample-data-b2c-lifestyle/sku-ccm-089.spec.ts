import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcm089 preset`, () => {
  it(`should return a skuCcm089 preset when built for rest`, () => {
    const skuCcm089Preset = InventoryEntryDraftRest.presets.skuCcm089().build();
    expect(skuCcm089Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcm089 preset when built for graphql`, () => {
    const skuCcm089Preset = InventoryEntryDraftGraphql.presets
      .skuCcm089()
      .build();
    expect(skuCcm089Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcm089 preset when built for legacy rest`, () => {
    const skuCcm089Preset = InventoryEntryDraft.presets
      .skuCcm089()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcm089Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcm089 preset when built for legacy graphql`, () => {
    const skuCcm089Preset = InventoryEntryDraft.presets
      .skuCcm089()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcm089Preset).toMatchInlineSnapshot();
  });
});
