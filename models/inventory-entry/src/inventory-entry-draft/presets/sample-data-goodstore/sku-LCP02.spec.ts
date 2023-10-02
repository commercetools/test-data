
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuLCP02 from './sku-LCP02';

describe('With skuLCP02 preset', () => {
    it('should return skuLCP02 preset', () => {
        const skuLCP02Preset = skuLCP02().build<TInventoryEntryDraft>();
        expect(skuLCP02Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuLCP02 preset when built for GraphQL', () => {
        const skuLCP02PresetGraphql = skuLCP02().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuLCP02PresetGraphql).toMatchInlineSnapshot(``);
    });
});


