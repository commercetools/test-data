
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuIQB09 from './sku-IQB09';

describe('With skuIQB09 preset', () => {
    it('should return skuIQB09 preset', () => {
        const skuIQB09Preset = skuIQB09().build<TInventoryEntryDraft>();
        expect(skuIQB09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuIQB09 preset when built for GraphQL', () => {
        const skuIQB09PresetGraphql = skuIQB09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuIQB09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


