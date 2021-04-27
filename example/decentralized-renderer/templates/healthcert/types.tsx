import { healthcert, notarise } from "@govtechsg/oa-schemata";
import { v2 } from "@govtechsg/open-attestation";

export type HealthCertDocument = v2.OpenAttestationDocument & healthcert.HealthCert & notarise.Notarise;

interface FhirBundleWithImmunization extends Omit<HealthCertDocument["fhirBundle"], "entry"> {
  entry: Array<HealthCertDocument["fhirBundle"]["entry"][number] | Immunization | ImmunizationRecommendation>;
}

export interface NotarisedHealthCert extends Omit<HealthCertDocument, "fhirBundle"> {
  fhirBundle: FhirBundleWithImmunization;
}

export interface CodeableConcept {
  coding: Array<{ system: string; code: string; display: string }>;
}

export interface Immunization {
  fullUrl?: string;
  resourceType: "Immunization"; // EntryResourceType.Immunization;
  vaccineCode: CodeableConcept;
  lotNumber: string;
  occurrenceDateTime: string;
  patient: {
    reference: string;
  };
}

export interface ImmunizationRecommendation {
  fullUrl?: string;
  resourceType: "ImmunizationRecommendation";
  recommendation: Array<{
    targetDisease: CodeableConcept;
    forecastStatus: CodeableConcept;
    dateCriterion: Array<{
      code: CodeableConcept;
      value: string;
    }>;
  }>;
  patient: {
    reference: string;
  };
}
