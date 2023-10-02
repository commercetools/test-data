
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSARMO034 from './sku-SARMO034';

describe('With skuSARMO034 preset', () => {
    it('should return skuSARMO034 preset', () => {
        const skuSARMO034Preset = skuSARMO034().build<TInventoryEntryDraft>();
        expect(skuSARMO034Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSARMO034 preset when built for GraphQL', () => {
        const skuSARMO034PresetGraphql = skuSARMO034().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSARMO034PresetGraphql).toMatchInlineSnapshot(``);
    });
});


