import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTcm03 preset`, () => {
  it(`should return a skuTcm03 preset when built for rest`, () => {
    const skuTcm03Preset = InventoryEntryDraftRest.presets.skuTcm03().build();
    expect(skuTcm03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTcm03 preset when built for graphql`, () => {
    const skuTcm03Preset = InventoryEntryDraftGraphql.presets
      .skuTcm03()
      .build();
    expect(skuTcm03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTcm03 preset when built for legacy rest`, () => {
    const skuTcm03Preset = InventoryEntryDraft.presets
      .skuTcm03()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTcm03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTcm03 preset when built for legacy graphql`, () => {
    const skuTcm03Preset = InventoryEntryDraft.presets
      .skuTcm03()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTcm03Preset).toMatchInlineSnapshot();
  });
});
