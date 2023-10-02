
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuCCC09 from './sku-CCC09';

describe('With skuCCC09 preset', () => {
    it('should return skuCCC09 preset', () => {
        const skuCCC09Preset = skuCCC09().build<TInventoryEntryDraft>();
        expect(skuCCC09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuCCC09 preset when built for GraphQL', () => {
        const skuCCC09PresetGraphql = skuCCC09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuCCC09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


