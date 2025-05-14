import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const alternator1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('alternator-1')
    .sku('alternator')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(27500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default alternator1;
