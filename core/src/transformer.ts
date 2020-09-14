// import type { Field } from '@jackfranklin/test-data-bot';
import type { Field } from './generator';
import type {
  Json,
  TTransformer,
  TTransformerOptions,
  TBuilder,
  TTransformType,
} from './types';

import { isObject, buildField, buildFields } from './helpers';

function Transformer<Model extends Json, TransformedModel extends Json>(
  transformType: TTransformType,
  transformOptions: TTransformerOptions<Model, TransformedModel>
): TTransformer<Model> {
  function transform(fields: Model) {
    let transformedFields = { ...fields };
    const fieldsAdder = transformOptions?.addFields;
    const fieldsReplacer = transformOptions?.replaceFields;
    const fieldsToRemove = transformOptions?.removeFields;
    const fieldsToBuild = transformOptions?.buildFields;

    const addOrReplaceField = (fieldName: string, fieldValue: Field) => {
      transformedFields = {
        ...transformedFields,
        [fieldName]: fieldValue,
      };
    };

    if (fieldsToBuild) {
      fieldsToBuild.forEach((fieldToBuild) => {
        const field = transformedFields[fieldToBuild] as TBuilder<
          typeof transformType,
          Model
        >;
        // Build only fields that are not null or undefined
        if (field) {
          transformedFields = {
            ...transformedFields,
            [fieldToBuild]: Array.isArray(field)
              ? buildFields<typeof transformType, Model>(field, transformType, {
                  fieldToBuild,
                })
              : buildField<typeof transformType, Model>(field, transformType, {
                  fieldToBuild,
                }),
          };
        }
      });
    }

    // The default transformer only allows building nested fields to not
    // allow re-transforming model shape
    if (transformType === 'default')
      return (transformedFields as unknown) as TransformedModel;

    if (fieldsAdder) {
      const fieldsToAdd = fieldsAdder({ fields });

      Object.entries(fieldsToAdd).forEach(([fieldName, fieldValue]) => {
        if (transformedFields[fieldName]) return;

        addOrReplaceField(fieldName, fieldValue);
      });
    }

    if (fieldsReplacer) {
      const fieldsToReplace = fieldsReplacer({ fields });

      if (isObject(fieldsToReplace))
        Object.entries(fieldsToReplace).forEach(([fieldName, fieldValue]) => {
          if (!transformedFields[fieldName]) return;

          addOrReplaceField(fieldName, fieldValue);
        });
      else {
        transformedFields = fieldsToReplace;
      }
    }

    if (fieldsToRemove) {
      fieldsToRemove.forEach((fieldToRemove) => {
        delete transformedFields[fieldToRemove];
      });
    }

    return (transformedFields as unknown) as TransformedModel;
  }

  return { type: transformType, transform };
}

export default Transformer;
