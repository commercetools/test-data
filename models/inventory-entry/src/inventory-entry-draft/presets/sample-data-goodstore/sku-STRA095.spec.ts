
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSTRA095 from './sku-STRA095';

describe('With skuSTRA095 preset', () => {
    it('should return skuSTRA095 preset', () => {
        const skuSTRA095Preset = skuSTRA095().build<TInventoryEntryDraft>();
        expect(skuSTRA095Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSTRA095 preset when built for GraphQL', () => {
        const skuSTRA095PresetGraphql = skuSTRA095().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSTRA095PresetGraphql).toMatchInlineSnapshot(``);
    });
});


