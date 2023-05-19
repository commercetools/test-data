import { Transformer } from '@commercetools-test-data/core';
import type { TAttributeDraft, TAttributeDraftGraphql } from '../types';

// Unlike the HTTP API, the GraphQL API requires JSON values to be escaped
function escapeJsonToString(obj: object): string {
  var jsonStr: string = JSON.stringify(obj);
  var escapedJsonStr = jsonStr
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\f/g, '\\f')
    .replace(/"/g, '\\"');

  return escapedJsonStr;
}

const transformers = {
  default: Transformer<TAttributeDraft, TAttributeDraft>('default', {}),
  rest: Transformer<TAttributeDraft, TAttributeDraft>('rest', {}),
  graphql: Transformer<TAttributeDraft, TAttributeDraftGraphql>('graphql', {
    replaceFields: ({ fields }) => ({
      ...fields,
      value: escapeJsonToString(fields.value),
    }),
  }),
};

export default transformers;
