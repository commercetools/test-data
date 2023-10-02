
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSQB034 from './sku-SQB034';

describe('With skuSQB034 preset', () => {
    it('should return skuSQB034 preset', () => {
        const skuSQB034Preset = skuSQB034().build<TInventoryEntryDraft>();
        expect(skuSQB034Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSQB034 preset when built for GraphQL', () => {
        const skuSQB034PresetGraphql = skuSQB034().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSQB034PresetGraphql).toMatchInlineSnapshot(``);
    });
});


