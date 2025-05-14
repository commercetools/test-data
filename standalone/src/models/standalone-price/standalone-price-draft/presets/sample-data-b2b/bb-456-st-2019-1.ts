import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bb456St20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bb456-st-2019-1')
    .sku('bb456-st-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2178001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default bb456St20191;
