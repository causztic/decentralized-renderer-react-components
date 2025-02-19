export const wrappedHealthcert = {
  version: "https://schema.openattestation.com/2.0/schema.json",
  data: {
    id: "e4e4b9a2-757c-4991-aedf-3a33944b67b4:string:3058a43d-fac6-41f0-9bfe-6097ff11b091",
    name: "5fec2af8-b213-4934-ae06-ed230e9344d1:string:HealthCert",
    validFrom: "e7f4842c-be29-4248-a3c9-714c3663e7b6:string:2020-11-16T06:26:19.160Z",
    fhirVersion: "004e3444-7d57-4292-bb2f-c73f43223851:string:4.0.1",
    fhirBundle: {
      resourceType: "dec7e30f-5013-4080-aae7-d12b2ff9d23f:string:Bundle",
      type: "d74d2202-c02a-4088-9191-876ac584fba7:string:collection",
      entry: [
        {
          resourceType: "38b467ee-b99d-41bf-90eb-5e96af5f21ce:string:Patient",
          extension: [
            {
              url:
                "516b5a98-754c-4528-a346-8706c4ddc498:string:http://hl7.org/fhir/StructureDefinition/patient-nationality",
              code: { text: "2ca2f7e7-d696-479d-984a-e6b8fbe02d84:string:SG" },
            },
          ],
          identifier: [
            {
              type: "9f12052c-a5f1-4238-acf7-1af84dcd006b:string:PPN",
              value: "72a835fc-d310-46c2-9640-9ec40b27834b:string:E7831177G",
            },
            {
              type: { text: "f94c6749-51cc-4711-996c-463347ce4438:string:NRIC" },
              value: "70b5bef7-1052-42ae-a2be-e98d2b988943:string:S9098989Z",
            },
          ],
          name: [{ text: "22114505-1e13-4b20-94ab-00422890f54c:string:Tan Chen Chen" }],
          gender: "bb68a089-5894-4bad-b0c9-f911c61a683f:string:female",
          birthDate: "802e30aa-4022-4e8d-818d-05084114ed41:string:1990-01-15",
        },
        {
          resourceType: "0f2451be-40d1-4a1f-85b1-2a9f0d495a05:string:Specimen",
          type: {
            coding: [
              {
                system: "e9822df5-cfbe-4f22-be55-2335fc21d150:string:http://snomed.info/sct",
                code: "00613989-e791-4f2d-a410-0279dcd1e0d0:string:258500001",
                display: "b5491d86-04dd-4fe6-9f74-7de4c8ee7378:string:Nasopharyngeal swab",
              },
            ],
          },
          collection: { collectedDateTime: "bbcb14f8-b4a3-4462-ac4a-9ab65328c303:string:2020-09-27T06:15:00Z" },
        },
        {
          resourceType: "53a00708-24c7-45f5-9f1f-f3c5dbe8c248:string:Observation",
          identifier: [
            {
              value: "479d0b9e-1268-4fe7-900e-7aae9a8ee145:string:123456789",
              type: "9bfaeb80-1fc6-49be-8ef5-d61659e14838:string:ACSN",
            },
          ],
          code: {
            coding: [
              {
                system: "4f8dedf9-d0b7-49cc-97b7-b6f800be1a64:string:http://loinc.org",
                code: "fcb18b4a-15a6-43c1-bbd9-e0244bc4b687:string:94531-1",
                display:
                  "bc863788-3d61-4516-8b66-9061488cba01:string:Reverse transcription polymerase chain reaction (rRT-PCR) test",
              },
            ],
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "0ccea5fa-26b5-4217-b6fd-5867e1c77806:string:http://snomed.info/sct",
                code: "83da1ffd-049c-4325-99f6-d993d71e2a78:string:260385009",
                display: "9f0232d7-936c-4700-be3b-9b8c3cbcc7df:string:Negative",
              },
            ],
          },
          effectiveDateTime: "d5b3b9c1-9d52-46ad-9785-de765622a577:string:2020-09-28T06:15:00Z",
          status: "98a93bd2-3eb0-48aa-b980-f03abebec868:string:final",
          performer: { name: [{ text: "ce3f606b-d7ef-4c18-9213-8a98abe79304:string:Dr Michael Lim" }] },
          qualification: [
            {
              identifier: "468315fc-1d3e-4d58-841a-3e821fd25be0:string:MCR 123214",
              issuer: "8ed075e1-c7f5-4740-880b-edd11b875c9a:string:MOH",
            },
          ],
        },
        {
          resourceType: "bda5e055-1367-414c-a355-76bbab5c5ed0:string:Organization",
          name: "4e1fa206-caec-46fe-8c64-03935721ada8:string:MacRitchie Medical Clinic",
          type: "1d3c1d61-8400-49f6-a667-bfbd11d990cd:string:Licensed Healthcare Provider",
          endpoint: { address: "3154bdf1-bf41-4f7f-8211-14c1d289a218:string:https://www.macritchieclinic.com.sg" },
          contact: {
            telecom: [
              {
                system: "6ab5a48e-29d6-42ea-82bb-12bcbe37ffe7:string:phone",
                value: "b9f9b007-5ada-4a0f-acf7-fbf288c87944:string:+6563113111",
              },
            ],
            address: {
              type: "ba3798d8-dcc6-4975-b778-1cdd19d905d7:string:physical",
              use: "0ded6b18-505e-46ce-a6d1-695390f9ff36:string:work",
              text: "2b7e5485-0e9b-4d6c-bae6-88e55873b864:string:MacRitchie Hospital Thomson Road Singapore 123000",
            },
          },
        },
        {
          resourceType: "b4745fbc-d49a-4e8f-9464-f1007f88f829:string:Organization",
          name: "da05bd1e-9c74-4fe8-a708-3872ebc17723:string:MacRitchie Laboratory",
          type: "6dbaeabf-51f5-4495-ae20-b57cb302a8a9:string:Accredited Laboratory",
          contact: {
            telecom: [
              {
                system: "2d1796a2-e666-40fe-8cce-4691b0c8f326:string:phone",
                value: "4f8ace7c-90e5-41a0-a649-c2583dc642b9:string:+6562711188",
              },
            ],
            address: {
              type: "28a78fb6-72eb-472e-ae50-c0d4c8e48379:string:physical",
              use: "db6aceba-0f25-4281-90bb-cfc992fdc4ef:string:work",
              text: "4d7889c6-42e8-4688-a1a7-b1c6081ceca3:string:2 Thomson Avenue 4 Singapore 098888",
            },
          },
        },
      ],
    },
    issuers: [
      {
        name: "1c53cdcc-5b88-4782-91ef-e441d0625707:string:SAMPLE ISSUER (DO NOT VERIFY)",
        id: "e7859f82-13a7-432e-b32e-ccefe22cc432:string:did:ethr:0xE39479928Cc4EfFE50774488780B9f616bd4B830",
        revocation: { type: "763d3f60-9d04-4107-acc1-1daa81ba502a:string:NONE" },
        identityProof: {
          type: "df5369da-5780-47df-9c45-eceb8ef62254:string:DNS-DID",
          location: "3b90b258-af64-465a-aef7-75d7878ab422:string:donotverify.testing.verify.gov.sg",
          key:
            "1eb9b6cc-ba00-4da8-b6dc-29a65f9d5c8b:string:did:ethr:0xE39479928Cc4EfFE50774488780B9f616bd4B830#controller",
        },
      },
    ],
    $template: {
      name: "5b44b882-cf63-4a4a-ae51-950e65c8e105:string:HEALTH_CERT",
      type: "8e474d0f-dac7-444f-bb97-9c956c6ea940:string:EMBEDDED_RENDERER",
      url: "a81dfed8-ec9d-4223-9a1f-8a9e5535fddb:string:https://healthcert.renderer.moh.gov.sg/",
    },
    notarisationMetadata: {
      reference: "1f152d13-85b5-45de-a0df-bced06c9d2d0:string:3058a43d-fac6-41f0-9bfe-6097ff11b091",
      notarisedOn: "d7673459-52c8-47d3-9a8c-552541ed4a47:string:2020-11-16T06:26:19.160Z",
      passportNumber: "dfe30a25-689d-4bb7-a80d-7c86bca51ddb:string:E7831177G",
    },
    logo:
      "257020a4-2295-4163-a07a-3f12bd4445a9:string:data:image/png;base64,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",
    attachments: [
      {
        filename: "16f21458-0849-472b-a81c-ef2673460bca:string:healthcert.txt",
        type: "702b8065-c034-4f3d-919d-f0c5bd673175:string:text/open-attestation",
        data:
          "f1b7e938-2c12-46ab-bf3a-a212f5174679:string:eyJ2ZXJzaW9uIjoiaHR0cHM6Ly9zY2hlbWEub3BlbmF0dGVzdGF0aW9uLmNvbS8yLjAvc2NoZW1hLmpzb24iLCJkYXRhIjp7ImlkIjoiYTFjMmQyODItNmMxZi00ZTQyLWEzMzUtZTg4OGRhNGQxYjM0OnN0cmluZzpURVNUMDAxIiwibmFtZSI6ImMyNzI3NTNkLWRjYTItNDk5Zi1iNTQzLTM4MTQ0OWU4NTA3NDpzdHJpbmc6SGVhbHRoQ2VydCIsInZhbGlkRnJvbSI6IjhjMWVlYWVkLWU4MTItNDliMi1iZTY2LTg2OGIxZmNiNDJmZTpzdHJpbmc6MjAyMC0xMS0yMCIsImZoaXJWZXJzaW9uIjoiNTg2ZDQ4NjEtYzlmZC00ZmE4LTk0NmEtMWIwZGJiMzY2MWM5OnN0cmluZzo0LjAuMSIsImZoaXJCdW5kbGUiOnsicmVzb3VyY2VUeXBlIjoiM2ZkOWI1MjAtN2JiYS00NzczLWJjMTgtMTZmMGY1N2U0NjlmOnN0cmluZzpCdW5kbGUiLCJ0eXBlIjoiMGRkNDZkZGEtODY0Yy00ZTgwLWI0NmUtYzc4MDE2MjFmYzdmOnN0cmluZzpjb2xsZWN0aW9uIiwiZW50cnkiOlt7InJlc291cmNlVHlwZSI6IjdkMTI5MWJiLWIxMTQtNDI0Yi1iMDY2LTE1ZmQyMmFlOWRiNTpzdHJpbmc6UGF0aWVudCIsImV4dGVuc2lvbiI6W3sidXJsIjoiMmVlNGRmNjItYjViZS00MWQ0LWI4ZWYtYWI4ZTE4NTdlMjA4OnN0cmluZzpodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vcGF0aWVudC1uYXRpb25hbGl0eSIsImNvZGUiOnsidGV4dCI6ImVhOTUzMmQ1LTlhMmQtNDRlYS05ZDFlLTlmZDMyN2M4MzY0NTpzdHJpbmc6U0cifX1dLCJpZGVudGlmaWVyIjpbeyJ0eXBlIjoiMDExYzEzYmUtMzE5Ny00ZDA4LTk0ZTMtYzNkMzExZTgxNjNkOnN0cmluZzpQUE4iLCJ2YWx1ZSI6ImEwZTE0YTUwLTZkMGUtNDk4Ni1iYWE1LThmMmQyZDZkNTZlYjpzdHJpbmc6RTc4MzExNzdHIn0seyJ0eXBlIjp7InRleHQiOiIyZmUyZjIzMy05MzBmLTRlYmItODFmZi1iYmI1MzdhM2Y3ZjI6c3RyaW5nOk5SSUMifSwidmFsdWUiOiI4ODkyMTc2Zi0yZGMzLTQ0ODctOTc1Ni1iOWJmNWUyN2EwYmI6c3RyaW5nOlM5MDk4OTg5WiJ9XSwibmFtZSI6W3sidGV4dCI6IjM0OGY0YThiLTBiMTktNDkyZi05YThhLTk0MTkxZjE3NDg1YzpzdHJpbmc6VGFuIENoZW4gQ2hlbiJ9XSwiZ2VuZGVyIjoiNWE3MWI3Y2ItMWNkNy00NzBjLTgzMWItYzBiMDkzMDJmMmZjOnN0cmluZzpmZW1hbGUiLCJiaXJ0aERhdGUiOiIzN2ZhODRjNy0yMjg1LTQ0N2EtOTRmOS04MWUyMzA2MTY2MTE6c3RyaW5nOjE5OTAtMDEtMTUifSx7InJlc291cmNlVHlwZSI6IjQ2NjUxMzk3LTlhMzAtNDFkYS1iOGQ1LTVlMzk2MTRjMzM1YjpzdHJpbmc6U3BlY2ltZW4iLCJ0eXBlIjp7ImNvZGluZyI6W3sic3lzdGVtIjoiYWM5NjQ3ODAtOWFiNS00M2U2LTg3NmMtN2Y2M2IxMjIxNDlkOnN0cmluZzpodHRwOi8vc25vbWVkLmluZm8vc2N0IiwiY29kZSI6IjgwYTM3YTM0LWZhYjEtNGZjOS1iOGFjLWUzNGVkYTZhNDA2YTpzdHJpbmc6MjU4NTAwMDAxIiwiZGlzcGxheSI6IjdmMDFmMGUwLTIxN2UtNDFhYi04MTA1LWUzOGYwMmViNWUxNzpzdHJpbmc6TmFzb3BoYXJ5bmdlYWwgc3dhYiJ9XX0sImNvbGxlY3Rpb24iOnsiY29sbGVjdGVkRGF0ZVRpbWUiOiI1MjcwODc5Yi05OTBkLTRlN2EtYmM3Ny1jNWU5ZWJkZjM5NWY6c3RyaW5nOjIwMjAtMDktMjdUMDY6MTU6MDBaIn19LHsicmVzb3VyY2VUeXBlIjoiNjY2M2I0NjEtYWYwYy00YTI0LWI3ODgtNThiOGY3MjM3NjE5OnN0cmluZzpPYnNlcnZhdGlvbiIsImlkZW50aWZpZXIiOlt7InZhbHVlIjoiNzFlYmNkYWMtOTU1My00MmFmLWE3M2ItNmJlYTQyNmM3MzVhOnN0cmluZzoxMjM0NTY3ODkiLCJ0eXBlIjoiYzQxMjliMWMtY2U5NC00ZDk5LWI4NTktMjc2NzQ2OTJlYzc2OnN0cmluZzpBQ1NOIn1dLCJjb2RlIjp7ImNvZGluZyI6W3sic3lzdGVtIjoiMzdkZDBjMTMtZGMxMy00ZDY4LWFhZDYtMzgwOGMzNzg2NWViOnN0cmluZzpodHRwOi8vbG9pbmMub3JnIiwiY29kZSI6IjUwYmUwOWE4LTAwNzMtNGUxMS1iMGNkLWZjOTg5NGM4OGYzMjpzdHJpbmc6OTQ1MzEtMSIsImRpc3BsYXkiOiI5YmYxOWFkNC1jMTFiLTQzOWUtOWUxNS05ZTJmODhiZGY5Nzg6c3RyaW5nOlJldmVyc2UgdHJhbnNjcmlwdGlvbiBwb2x5bWVyYXNlIGNoYWluIHJlYWN0aW9uIChyUlQtUENSKSB0ZXN0In1dfSwidmFsdWVDb2RlYWJsZUNvbmNlcHQiOnsiY29kaW5nIjpbeyJzeXN0ZW0iOiI0YWQ1ODBiNS1iYWQ2LTQxZjEtYmJkYS0xZDlmNGY5ODFiY2M6c3RyaW5nOmh0dHA6Ly9zbm9tZWQuaW5mby9zY3QiLCJjb2RlIjoiNWM2NTRlMWUtNmNjOS00NGViLTllOTktNGU5ZGVjZDU2ODZjOnN0cmluZzoyNjAzODUwMDkiLCJkaXNwbGF5IjoiNzI2Y2E5NjgtMjk0MS00Yzc2LTg3MWQtYWM1N2JhOWNkMDVmOnN0cmluZzpOZWdhdGl2ZSJ9XX0sImVmZmVjdGl2ZURhdGVUaW1lIjoiYzhlYzhhNWYtYWY1ZS00MzYyLTgwM2YtZGMyNzAwM2ZhYjEzOnN0cmluZzoyMDIwLTA5LTI4VDA2OjE1OjAwWiIsInN0YXR1cyI6IjFlYTBkZmE5LWRiMzQtNDFlMy1hNDkwLWRkZWQ0YjM1NGExOTpzdHJpbmc6ZmluYWwiLCJwZXJmb3JtZXIiOnsibmFtZSI6W3sidGV4dCI6ImE3NzI1MDE5LWNkNDYtNDEyNS05MDAzLTdmNDE2NGMyOTY2MjpzdHJpbmc6RHIgTWljaGFlbCBMaW0ifV19LCJxdWFsaWZpY2F0aW9uIjpbeyJpZGVudGlmaWVyIjoiMDExMTY1OWEtNTRhMi00MjYwLWJlMzUtZDNlMmQzZmVlYTAwOnN0cmluZzpNQ1IgMTIzMjE0IiwiaXNzdWVyIjoiZjQzNTRjYzQtYzJhOS00YTk2LWE1OTQtODE1YmNkY2FmNjdjOnN0cmluZzpNT0gifV19LHsicmVzb3VyY2VUeXBlIjoiNDc0ODg4NjYtNjkyMC00MWIwLWJjNzMtMDM1ZmMxMDY3MDFmOnN0cmluZzpPcmdhbml6YXRpb24iLCJuYW1lIjoiNzc3OGM2ZTgtZTI5My00NzJiLWJiNmEtNDNmMWFiNDg1YzlkOnN0cmluZzpNYWNSaXRjaGllIE1lZGljYWwgQ2xpbmljIiwidHlwZSI6IjA0OGQ1ZGM4LTg1ZmMtNDQyZC1hMThlLTdmY2UwNDk0ZDczNTpzdHJpbmc6TGljZW5zZWQgSGVhbHRoY2FyZSBQcm92aWRlciIsImVuZHBvaW50Ijp7ImFkZHJlc3MiOiI5NjkzYjdhOS0yMzI5LTRiOTgtODVmNi1hNThjNWNlNGI5ZTU6c3RyaW5nOmh0dHBzOi8vd3d3Lm1hY3JpdGNoaWVjbGluaWMuY29tLnNnIn0sImNvbnRhY3QiOnsidGVsZWNvbSI6W3sic3lzdGVtIjoiYjU5YjI2NDYtNWVjYi00NWM0LThmOGEtODAwYzBjMWI4MDhmOnN0cmluZzpwaG9uZSIsInZhbHVlIjoiZjk5MDMzNjYtMTgyNS00Njc5LWI1MzUtNjk5ODdkZGQyYWQ5OnN0cmluZzorNjU2MzExMzExMSJ9XSwiYWRkcmVzcyI6eyJ0eXBlIjoiYmY0OTE0NDYtMDAzMy00NzBlLThhOTQtMjc4ZmIyNWRkZDY2OnN0cmluZzpwaHlzaWNhbCIsInVzZSI6Ijc0ZTEwMTMzLTcyNTUtNGRjNy04NjNiLTgxYjA1MDZiMWFhMjpzdHJpbmc6d29yayIsInRleHQiOiI3NjFlNDI0OC1iNTI0LTRjODctOGM0ZC0xZDYyZTg3ZjhjZWY6c3RyaW5nOk1hY1JpdGNoaWUgSG9zcGl0YWwgVGhvbXNvbiBSb2FkIFNpbmdhcG9yZSAxMjMwMDAifX19LHsicmVzb3VyY2VUeXBlIjoiMTE3YzhjNjQtYzcyNy00ZGY2LWE3YjItMGE1Mjk3YTZjZTFhOnN0cmluZzpPcmdhbml6YXRpb24iLCJuYW1lIjoiMjQzYTliN2ItMzczOC00MWIzLWJiNzQtMGFjY2IyYzFmYWNjOnN0cmluZzpNYWNSaXRjaGllIExhYm9yYXRvcnkiLCJ0eXBlIjoiOTNiMzI4ODgtOTI2MC00NWYyLWE4ZTAtOTE3YzkwOWRiZThkOnN0cmluZzpBY2NyZWRpdGVkIExhYm9yYXRvcnkiLCJjb250YWN0Ijp7InRlbGVjb20iOlt7InN5c3RlbSI6IjM4MDY3NDQ1LTNkNDctNDYyNS1hYjE0LTNmNjk3MjlkODYwYzpzdHJpbmc6cGhvbmUiLCJ2YWx1ZSI6ImUzNDU2MWNlLWQ0MGEtNDE4NC05ZGRkLTM3ODU3OTIzMjg3ZTpzdHJpbmc6KzY1NjI3MTExODgifV0sImFkZHJlc3MiOnsidHlwZSI6ImNjNTcwZDBkLTUzOWEtNGY0Ny05MjExLTlkMWYzMzZkZmVjMjpzdHJpbmc6cGh5c2ljYWwiLCJ1c2UiOiJjMjViZTJhNS04NjUzLTRjZGMtOWQ1ZS0wNjM5OTBmZjY2M2Y6c3RyaW5nOndvcmsiLCJ0ZXh0IjoiOGI0OGYzYzAtNTc1NC00ZmQ3LTk5YTgtMjM0NDNmNDRlOGMzOnN0cmluZzoyIFRob21zb24gQXZlbnVlIDQgU2luZ2Fwb3JlIDA5ODg4OCJ9fX1dfSwiaXNzdWVycyI6W3siaWQiOiI3YzZhNWFmMS1hMTg3LTQ5NTktYjk5My1iYzg1NmZiN2MzYzc6c3RyaW5nOmRpZDpldGhyOjB4RTM5NDc5OTI4Q2M0RWZGRTUwNzc0NDg4NzgwQjlmNjE2YmQ0QjgzMCIsInJldm9jYXRpb24iOnsidHlwZSI6IjhmNmY2OGI0LTQwNzMtNDc5Ni05YTlhLWI4MDM3NmUzNTk4NjpzdHJpbmc6Tk9ORSJ9LCJuYW1lIjoiNGQ2MTRiYzctNDk2NC00YmI5LTkyYjYtNGM4YWQzNmQ3ZTgwOnN0cmluZzpTQU1QTEUgQ0xJTklDIiwiaWRlbnRpdHlQcm9vZiI6eyJ0eXBlIjoiNjI3YmE4NjYtYjcxNC00MTcyLWJiOGUtYmFhYzcwYzdmYzJkOnN0cmluZzpETlMtRElEIiwibG9jYXRpb24iOiI5ZGRlN2RjOC1lMTk4LTQ1ZDItYmJjNi1jYzg2NDgyMWEwMzQ6c3RyaW5nOmRvbm90dmVyaWZ5LnRlc3RpbmcudmVyaWZ5Lmdvdi5zZyIsImtleSI6Ijg5MjRjOWRhLTYzNjQtNDZhZi04MTc1LTAzMDM1OTk5NWNkNDpzdHJpbmc6ZGlkOmV0aHI6MHhFMzk0Nzk5MjhDYzRFZkZFNTA3NzQ0ODg3ODBCOWY2MTZiZDRCODMwI2NvbnRyb2xsZXIifX1dLCJsb2dvIjoiOGU5NDFkY2ItM2MzNi00NGZiLWFlZTEtODgxMzY2MzQ2ZGY4OnN0cmluZzpkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWZRQUFBRElDQU1BQUFBcHgrUGFBQUFBTTFCTVZFVUFBQURNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpNek16ZUNtaUFBQUFBRUhSU1RsTUFRTCtBN3hBZ24yRFAzekJ3cjFDUEVsK0kvUUFBQndkSlJFRlVlTnJzbmQxMjJ5b1FSdmtISVNITit6L3R5VWs5b1RFQ1ExYlRCYzIzYnlOczBCNUdJREFSQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWsrSWsrSWR4NGc1TjRCOUdRL3JQQTlKL0lQZlNnd0wvTUVFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUR3UDVaUG9QNXI3RkpLQWY3Y3VmQmloUE5Ta1g1aGxBOXUrRHNQN2RYL0pLMVAyVlBpU0lvZWJFckx3Vmg1WngrOEMxWTIyWXRQMEZwZjZoZGVhK21xMVdsaXhmZWo2UmNEeGowOXN3WGJiZUJRcGlqdWcyMGFqL1NFOGJ2bzVoRXVhdkF1U0twUWZKeFRHOTFnVXJDVjZqU1FFMG9Qa2U0d3VrZTcwNUVxcExOV3h0TXRTazRqdlhHbGQrdExseHZWTU5uYWtEN21FbmRZVFZXU25WODYwV1VYbDM0Uk15N0JlbXB5R3pON3BBYm1YRUE2YmZ2SzB1MzJ1VEZLS1ZNMHIwWXcxTVRjRnZwOGlWTFBEMCs5Z0hReSs3clNmM2VlanAySHVGY3NtbGRpRXowRnpLWGZTUnczcWUwOFhxZDlkUDZRS09Obmt1NGxHM05TYi9SQnRLdEt0MXR0ZEJKaVliMlZJN2JyYzd0YzhJWW90SnpIVUIwYytPK1QzclRRdUxLc1pScXB6a1RTN2RaSTR2bytxSm5kRUdPOEV6ZWN5amFjNi9JVE4yS09XYVVMSVQvYUxkZVVucXBkaTdWVzIrS3ljMjlGTDNzN2UzaGk1TFRTaGVXV3B5V2xINFh6bXZXam5pT2lGTjNZV0RpdldJOTJXdWs1Y3QyQzBwM0p6bDlZTjY2V0k1SVYvVnlGODZyMWExN3BINVVNQzBwWC9Ed1hWVTUyNEtzNVlnRFptTDR6R3oxdzgwcDMzUGoxcE12Y2krdGMyY0ZJam1oSDJkV1ZmdWFWTHVMank5ZVR6Z3FPcnFld3YwdnVtLzFLUjQrMmE2RGg1cFhPN1Y5TytzNEtSSlBBRHV4Tmp0akZDQ2svQ2x0RXpnZnpTdGVyU3ZkWlFaZURveXlxeFFndVIxbFhtQmxJLzlQU2ViWnBiT2U4Yml2dDJiRks5WWFLNGVIZTdOTE5hdExQM3FHWUxmTDcxUm9NdkI2WHU5NkozVFd0OUxUb1FNNXptOFlmeGJISUVTUFpYWFcvdG92VFNvK1BxRnhOZXN3WnFqTy9YMDlPdkJnaTlPY0h3N2xsVXVrY3YrZGkwcm5lcWY5OXVYb0tnbE1Nd2FsbDd4L215MG1sUDVwaVZudjNmdVorMTkzeG5wVFlMejNTamVqUExYcE82VHRYYnpYcGZJVWNlSkhtUHNYQUpzYkkrYUw3ZnZzcHBWc09YN3VhZEo5RnZ1VDYzUHhzWkFRM1VNeHlnTHlXdnNrNi9sdWt1NDBmYjh0dG9sREZGYjFaUVE2L21Sa3YxaVc5aTFKNkMvMWFlakFjdlFQVm1VdDZGQjJjbjI2SnpETzRUc2FMY1dlYVRibzdJbjA0WDA4Njk2WHhUbnJrbXpHQ0hpbW1KcEx1TmFQaTcxZitLT2t0ZTVJSzlPclM3NGluZ1BTZkpkMW9JU0Q5WjBtL2hQaEIwbysvTGQzTU1HVXJTVTY4czl5VXpYU08zc3VoVytCaCtKajBveXoyc25acWdwY3pkNWl3cHZSdm1LZlhwWS9QMHllU2ZzZ0hPaGxpd3RMUzdjQlNpUjFhWkZQMzBxK0J0M2ZYYks5aFEyVHIrNHJTYys4ZGZsWENPMmw2cFkrUElzNXBGMXhzNGttYlhWQjZ6MEpXUlJkSCs2QjB3OFZlb3lkZVdsVjg0eGFVTG52WDA4dkV6Tm4rSEpPdSt0ZlQxY1NiS1BMZXd2V2tjL2MxL1l0czRTbEorREhwdW5zRjMwNjlYU3J3N1ZoUWVsNGdITjNRdUhPOGpFay9POGNDK1VvL3BYUit2RzBMU24vWlh4bFh5SW9jNjBQU2hlbGR3dmR6YjRIVzNJNzFwTy8wd0hZcU9JcDh2NDFKVDUyVE5qZjVqeDI0Zm1FOTZXTHJHNy9ic29NNmVoQ0dwSjhzMC9aVjNrOHFuVE9kWDFCNjZIT2diNGI1S1JmdGw1NGZDN292eXZaWnBYdDZKeTRvM1pxZWRPdk1UZHNsUFVoRDBybFd4dlZNRnRTMFAxVU9uUHZXazg0WGRiMERJWFcva0hpTVNMZW03ck1NS0RtdDlKMEhtZ3RLLzNCZzdHaGdPR0xDZ1BUOGFmcDFwZFRFeDQ4ODZuZ3RLRjJjOU9wc2dWRGJPS0NKT1Fha2krMVZyRmkrd3JpSnBmTmEvb3JTaGNyVzI4NmpMWXN5eWZaTGw4U0V0bk02NWoxU0xIK3dYVkc2amMwRFlJOTg2RnVqS0puUUxWMGMxTXJ3N3NPNW4vZnd3RGZrb2o5Z2ZENG96aHlGQVVWTXFCUmxZckNkMG9VblJya2l5RXpPUEZOTEZ6VHpUNVZsQlhkM09tOG96a0J0T09kRFBaa1U5azkvUENwTGtIYXJuWlVmSWhYT3YwLzZJU3YwU09jdmovMWI5dHpma041RzN4N2ViZEloMzRXZkY2dHBEcnJZSzZQVXBkLzRmSlMzYnBYYXJ0T0pOK1NSREJYT3YwbDZtNkV6WjF6MzVsdzlrM1JPMDFXTUZCVTRINCsyMWxNYmI4WHMwdmx2WVZIcDNQVXFLQ2NhT0RVc25iTkxTUjVjVEMrZForcHBWZWxDbkthMTE3ZU5UTlFrU1ZGaVUydFArUXJTT1Z2WlphVUxxd3Z0UENoL2pkTWIzUk45OVFPa29qdjhMc1FTMGsvTzcrdEtmK05NVDk2TlAwVXZMdmluUm05Sm4yNHdWcmJEQ2JHSWRGNHhWQk5KL3hKU2U2VWVvL0JqLzlJLzdEeTBQdnJuSnk1b3BTSVJSWlgwYVFVQUFQelgzaDNVQUFDQVFBeDdZQUQvYW5GQkNOZGFtSUFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEQW1tb2VLOUh6aUI1STlFQlhueDhBQUFBQUFBQUFBTEJtQUlaS216V0lueHlPQUFBQUFFbEZUa1N1UW1DQyIsIiR0ZW1wbGF0ZSI6eyJuYW1lIjoiN2M0NDIxNzMtMjMwYS00MmNiLTlkY2EtOWViYTIyYWMzNjAzOnN0cmluZzpIRUFMVEhDRVJUIiwidHlwZSI6IjU0MWVjMWE0LTJkYjItNDdjNi04OGNhLTcxZGIxYjczNTlkMzpzdHJpbmc6RU1CRURERURfUkVOREVSRVIiLCJ1cmwiOiI5NzUyM2Y5Yi1lYmY2LTQ2YjYtOTI5YS0wMmRmMTY2YzQ5MTE6c3RyaW5nOmh0dHBzOi8vbW9oLWhlYWx0aGNlcnQtcmVuZGVyZXIubmV0bGlmeS5hcHAvIn19LCJzaWduYXR1cmUiOnsidHlwZSI6IlNIQTNNZXJrbGVQcm9vZiIsInRhcmdldEhhc2giOiJmZjM0M2FhMjQzMjg0MTExN2NlMzNmMWEwYmNlNzU0ODhmYzUxZDg5MDhmZDZmMTMzZWYyZDRhZjE4YjllYmMyIiwicHJvb2YiOltdLCJtZXJrbGVSb290IjoiZmYzNDNhYTI0MzI4NDExMTdjZTMzZjFhMGJjZTc1NDg4ZmM1MWQ4OTA4ZmQ2ZjEzM2VmMmQ0YWYxOGI5ZWJjMiJ9LCJwcm9vZiI6W3sidHlwZSI6Ik9wZW5BdHRlc3RhdGlvblNpZ25hdHVyZTIwMTgiLCJjcmVhdGVkIjoiMjAyMC0xMC0wN1QwOTo1NjoxMC42OTFaIiwicHJvb2ZQdXJwb3NlIjoiYXNzZXJ0aW9uTWV0aG9kIiwidmVyaWZpY2F0aW9uTWV0aG9kIjoiZGlkOmV0aHI6MHhFMzk0Nzk5MjhDYzRFZkZFNTA3NzQ0ODg3ODBCOWY2MTZiZDRCODMwI2NvbnRyb2xsZXIiLCJzaWduYXR1cmUiOiIweDI5NjYzYTZiZDhiYzA5MTdmMzdkMWIyMGViNjQ0N2M5ZTc4OGQ1MTc3NWNhOWZlYWExZjk4YjYyYWVhODZiYTAyMDIyZjhhMzFkOWE1Y2IwYmU3YWFhYzY1ZDZhMTJkZjc0YmQzZTBlNzkxMTEzMmNiZGUxNzhhMTg2ZTZhMDViMWIifV19",
      },
    ],
  },
  signature: {
    type: "SHA3MerkleProof",
    targetHash: "4ff16dad5e11bf2ff209f7d343ac17f9fc266067200e8277169934d3907c3053",
    proof: [],
    merkleRoot: "4ff16dad5e11bf2ff209f7d343ac17f9fc266067200e8277169934d3907c3053",
  },
  proof: [
    {
      type: "OpenAttestationSignature2018",
      created: "2020-11-16T06:26:19.187Z",
      proofPurpose: "assertionMethod",
      verificationMethod: "did:ethr:0xE39479928Cc4EfFE50774488780B9f616bd4B830#controller",
      signature:
        "0xeeea4f9eae2d66ef9469a9d0b6fee1eda8d5f22f15d42873dd1bad01c83154a00c12dbac78b38c76fbd9cbdd49d853e2ab2228cb3c539da66172db8eeede8d121b",
    },
  ],
};
