import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MetaboliteList } from "./metabolite/MetaboliteList";
import { MetaboliteCreate } from "./metabolite/MetaboliteCreate";
import { MetaboliteEdit } from "./metabolite/MetaboliteEdit";
import { MetaboliteShow } from "./metabolite/MetaboliteShow";
import { SpeciesList } from "./species/SpeciesList";
import { SpeciesCreate } from "./species/SpeciesCreate";
import { SpeciesEdit } from "./species/SpeciesEdit";
import { SpeciesShow } from "./species/SpeciesShow";
import { BgcList } from "./bgc/BgcList";
import { BgcCreate } from "./bgc/BgcCreate";
import { BgcEdit } from "./bgc/BgcEdit";
import { BgcShow } from "./bgc/BgcShow";
import { ChemicalGroupList } from "./chemicalGroup/ChemicalGroupList";
import { ChemicalGroupCreate } from "./chemicalGroup/ChemicalGroupCreate";
import { ChemicalGroupEdit } from "./chemicalGroup/ChemicalGroupEdit";
import { ChemicalGroupShow } from "./chemicalGroup/ChemicalGroupShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"FungalMetaboliteDB"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Metabolite"
          list={MetaboliteList}
          edit={MetaboliteEdit}
          create={MetaboliteCreate}
          show={MetaboliteShow}
        />
        <Resource
          name="Species"
          list={SpeciesList}
          edit={SpeciesEdit}
          create={SpeciesCreate}
          show={SpeciesShow}
        />
        <Resource
          name="Bgc"
          list={BgcList}
          edit={BgcEdit}
          create={BgcCreate}
          show={BgcShow}
        />
        <Resource
          name="ChemicalGroup"
          list={ChemicalGroupList}
          edit={ChemicalGroupEdit}
          create={ChemicalGroupCreate}
          show={ChemicalGroupShow}
        />
      </Admin>
    </div>
  );
};

export default App;
