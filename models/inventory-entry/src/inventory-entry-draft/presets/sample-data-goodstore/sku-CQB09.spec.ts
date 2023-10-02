
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuCQB09 from './sku-CQB09';

describe('With skuCQB09 preset', () => {
    it('should return skuCQB09 preset', () => {
        const skuCQB09Preset = skuCQB09().build<TInventoryEntryDraft>();
        expect(skuCQB09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuCQB09 preset when built for GraphQL', () => {
        const skuCQB09PresetGraphql = skuCQB09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuCQB09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


