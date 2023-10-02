
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuBUCK023 from './sku-BUCK023';

describe('With skuBUCK023 preset', () => {
    it('should return skuBUCK023 preset', () => {
        const skuBUCK023Preset = skuBUCK023().build<TInventoryEntryDraft>();
        expect(skuBUCK023Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuBUCK023 preset when built for GraphQL', () => {
        const skuBUCK023PresetGraphql = skuBUCK023().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuBUCK023PresetGraphql).toMatchInlineSnapshot(``);
    });
});


