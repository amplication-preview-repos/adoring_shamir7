import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { MetaboliteTitle } from "../metabolite/MetaboliteTitle";

export const ChemicalGroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="metabolites" reference="Metabolite">
          <SelectArrayInput
            optionText={MetaboliteTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
