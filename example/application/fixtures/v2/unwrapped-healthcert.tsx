import { healthcert } from "@govtechsg/oa-schemata";
import { v2 } from "@govtechsg/open-attestation";

const {
  AddressType,
  FhirBundleType,
  Gender,
  FhirBundleResourceType,
  Status,
  System,
  Use,
  EntryResourceType,
} = healthcert;

export const unwrappedHealthCert = {
  id: "TEST001",
  name: "HealthCert",
  validFrom: "2020-11-20",
  fhirVersion: "4.0.1",
  fhirBundle: {
    resourceType: FhirBundleResourceType.Bundle,
    type: FhirBundleType.Collection,
    entry: [
      {
        resourceType: EntryResourceType.Patient,
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/patient-nationality",
            code: {
              text: "SG",
            },
          },
        ],
        identifier: [
          {
            type: "PPN",
            value: "E7831177G",
          },
          {
            type: {
              text: "NRIC",
            },
            value: "S9098989Z",
          },
        ],
        name: [
          {
            text: "Tan Chen Chen",
          },
        ],
        gender: Gender.Female,
        birthDate: "1990-01-15",
      },
      {
        resourceType: EntryResourceType.Specimen,
        type: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "258500001",
              display: "Nasopharyngeal swab",
            },
          ],
        },
        collection: {
          collectedDateTime: "2020-09-27T06:15:00Z",
        },
      },
      {
        resourceType: EntryResourceType.Observation,
        identifier: [
          {
            value: "123456789",
            type: "ACSN",
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "94531-1",
              display: "Reverse transcription polymerase chain reaction (rRT-PCR) test",
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "260385009",
              display: "Negative",
            },
          ],
        },
        effectiveDateTime: "2020-09-28T06:15:00Z",
        status: Status.Final,
        performer: {
          name: [
            {
              text: "Dr Michael Lim",
            },
          ],
        },
        qualification: [
          {
            identifier: "MCR 123214",
            issuer: "MOH",
          },
        ],
      },
      {
        resourceType: EntryResourceType.Organization,
        name: "MacRitchie Medical Clinic",
        type: "Licensed Healthcare Provider",
        endpoint: {
          address: "https://www.macritchieclinic.com.sg",
        },
        contact: {
          telecom: [
            {
              system: System.Phone,
              value: "+6563113111",
            },
          ],
          address: {
            type: AddressType.Physical,
            use: Use.Work,
            text: "MacRitchie Hospital Thomson Road Singapore 123000",
          },
        },
      },
      {
        resourceType: EntryResourceType.Organization,
        name: "MacRitchie Laboratory",
        type: "Accredited Laboratory",
        contact: {
          telecom: [
            {
              system: System.Phone,
              value: "+6562711188",
            },
          ],
          address: {
            type: AddressType.Physical,
            use: Use.Work,
            text: "2 Thomson Avenue 4 Singapore 098888",
          },
        },
      },
    ],
  },
  issuers: [
    {
      name: "GovTech",
      documentStore: "0x8Fc57204c35fb9317D91285eF52D6b892EC08cD3",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "example.openattestation.com",
      },
    },
  ],
  $template: {
    name: "HEALTH_CERT",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://healthcert.renderer.moh.gov.sg/",
  },
  notarisationMetadata: {
    reference: "ABC-123-XYZ",
    notarisedOn: "2020-09-27T06:15:00Z",
    passportNumber: "E7831177G",
    url:
      "https://action.openattestation.com/?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fgallery.openattestation.com%2Fstatic%2Fdocuments%2Fhealthcerts-memo-notarised.json%22%2C%22permittedActions%22%3A%5B%22VIEW%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fdev.opencerts.io%22%7D%7D",
  },
  logo: "",
};
