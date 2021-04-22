import ReactDOM from "react-dom";
import { rawOpencerts } from "./fixtures/v2/opencerts";
import { driverLicense } from "./fixtures/v3/driverLicense";
import React from "react";
import { AppContainer } from "./container";
import { unwrappedHealthCert } from "./fixtures/v2/unwrapped-healthcert";

ReactDOM.render(
  <AppContainer
    documents={[
      { name: "OpenCerts (v2)", document: rawOpencerts },
      { name: "HealthCert (v2)", document: unwrappedHealthCert },
      { name: "Driver License (V3)", document: driverLicense },
    ]}
  />,
  document.getElementById("root")
);
