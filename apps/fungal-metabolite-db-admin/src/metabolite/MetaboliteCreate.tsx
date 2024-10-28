import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChemicalGroupTitle } from "../chemicalGroup/ChemicalGroupTitle";

export const MetaboliteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
