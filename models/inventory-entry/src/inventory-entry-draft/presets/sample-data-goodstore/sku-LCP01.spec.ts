
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuLCP01 from './sku-LCP01';

describe('With skuLCP01 preset', () => {
    it('should return skuLCP01 preset', () => {
        const skuLCP01Preset = skuLCP01().build<TInventoryEntryDraft>();
        expect(skuLCP01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuLCP01 preset when built for GraphQL', () => {
        const skuLCP01PresetGraphql = skuLCP01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuLCP01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


