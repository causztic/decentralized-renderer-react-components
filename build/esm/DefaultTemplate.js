import React from "react";
export const DefaultTemplate = (props) => {
    return (React.createElement("div", { id: "default-template" },
        React.createElement("h3", { style: {
                textAlign: "center",
            } }, "This is the OpenAttestation default renderer"),
        React.createElement("div", { role: "alert", style: {
                textAlign: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
                color: "#856404",
                backgroundColor: "#fff3cd",
                border: "1px solid #ffeeba",
                padding: ".75rem 1.25rem",
            } },
            "You see this template because the certificate issuer misconfigured the template configuration of your document. Please check with the certificate issuer. More information is available in",
            " ",
            React.createElement("a", { href: "https://openattestation.com/docs/advanced/custom-renderer", target: "_blank", rel: "noopener noreferrer" }, "the documentation"),
            "."),
        React.createElement("pre", { style: { backgroundColor: "lightgray" } }, JSON.stringify(props.document, null, 2))));
};
export const defaultTemplate = {
    id: "default-template",
    label: "Default",
    template: DefaultTemplate,
};
//# sourceMappingURL=DefaultTemplate.js.map