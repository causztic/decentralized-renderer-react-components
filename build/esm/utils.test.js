import React from "react";
import { documentTemplates, repeat } from "./utils";
import { v2 } from "@govtechsg/open-attestation";
import { noAttachmentRenderer } from "./components/renderer/NoAttachmentRenderer";
describe("repeat", () => {
    it("should not call callback when times is 0", () => {
        const callback = jest.fn();
        repeat(0)(callback);
        expect(callback).toHaveBeenCalledTimes(0);
    });
    it("should not call callback when times is 3", () => {
        const callback = jest.fn();
        repeat(3)(callback);
        expect(callback).toHaveBeenCalledTimes(3);
    });
});
describe("documentTemplates", () => {
    const Component = () => React.createElement("div", null, "Hello");
    it("should return foo templates", () => {
        const document = {
            issuers: [{ name: "name" }],
            $template: { name: "foo", type: v2.TemplateType.EmbeddedRenderer, url: "url" },
        };
        const templateRegistry = {
            foo: [{ id: "component-a", label: "Component A", template: Component }],
        };
        expect(documentTemplates(document, templateRegistry, noAttachmentRenderer)).toStrictEqual([
            {
                id: "component-a",
                label: "Component A",
                template: Component,
                type: "custom-template",
            },
        ]);
    });
    it("should return foo templates but filter out component-b", () => {
        const document = {
            issuers: [{ name: "name" }],
            $template: { name: "foo", type: v2.TemplateType.EmbeddedRenderer, url: "url" },
        };
        const templateRegistry = {
            foo: [
                { id: "component-a", label: "Component A", template: Component },
                { id: "component-b", label: "Component B", template: Component, predicate: () => false },
            ],
        };
        expect(documentTemplates(document, templateRegistry, noAttachmentRenderer)).toStrictEqual([
            {
                id: "component-a",
                label: "Component A",
                template: Component,
                type: "custom-template",
            },
        ]);
    });
});
//# sourceMappingURL=utils.test.js.map