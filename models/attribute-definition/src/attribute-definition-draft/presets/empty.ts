import { TAttributeDefinitionDraftBuilder } from '../../types';
import AttributeDefinition from '../builder';

const empty = (): TAttributeDefinitionDraftBuilder =>
  AttributeDefinition()
    .attributeConstraint(undefined)
    .inputHint(undefined)
    .isSearchable(undefined);

export default empty;
