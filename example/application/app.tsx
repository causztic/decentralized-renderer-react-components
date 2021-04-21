import ReactDOM from "react-dom";
import { rawOpencerts } from "./fixtures/v2/opencerts";
import { driverLicense } from "./fixtures/v3/driverLicense";
import React from "react";
import { AppContainer } from "./container";
import { healthcert } from "./fixtures/v3/healthcert";

ReactDOM.render(
  <AppContainer
    documents={[
      { name: "OpenCerts (v2)", document: rawOpencerts },
      { name: "Driver License (V3)", document: driverLicense },
      { name: "HealthCert (v3)", document: healthcert },
    ]}
  />,
  document.getElementById("root")
);
