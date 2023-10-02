
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSHOT095 from './sku-SHOT095';

describe('With skuSHOT095 preset', () => {
    it('should return skuSHOT095 preset', () => {
        const skuSHOT095Preset = skuSHOT095().build<TInventoryEntryDraft>();
        expect(skuSHOT095Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSHOT095 preset when built for GraphQL', () => {
        const skuSHOT095PresetGraphql = skuSHOT095().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSHOT095PresetGraphql).toMatchInlineSnapshot(``);
    });
});


