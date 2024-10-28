import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChemicalGroupTitle } from "../chemicalGroup/ChemicalGroupTitle";

export const MetaboliteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="chemicalGroup.id"
          reference="ChemicalGroup"
          label="chemicalGroup"
        >
          <SelectInput optionText={ChemicalGroupTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
