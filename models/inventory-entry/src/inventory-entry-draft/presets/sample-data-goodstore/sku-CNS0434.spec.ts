
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuCNS0434 from './sku-CNS0434';

describe('With skuCNS0434 preset', () => {
    it('should return skuCNS0434 preset', () => {
        const skuCNS0434Preset = skuCNS0434().build<TInventoryEntryDraft>();
        expect(skuCNS0434Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuCNS0434 preset when built for GraphQL', () => {
        const skuCNS0434PresetGraphql = skuCNS0434().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuCNS0434PresetGraphql).toMatchInlineSnapshot(``);
    });
});


