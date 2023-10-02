
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuBARM03 from './sku-BARM03';

describe('With skuBARM03 preset', () => {
    it('should return skuBARM03 preset', () => {
        const skuBARM03Preset = skuBARM03().build<TInventoryEntryDraft>();
        expect(skuBARM03Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuBARM03 preset when built for GraphQL', () => {
        const skuBARM03PresetGraphql = skuBARM03().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuBARM03PresetGraphql).toMatchInlineSnapshot(``);
    });
});


