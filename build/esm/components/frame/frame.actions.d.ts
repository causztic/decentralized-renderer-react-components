import { ActionType } from "typesafe-actions";
export declare const updateHeight: import("typesafe-actions").PayloadAC<"UPDATE_HEIGHT", number>;
export declare const obfuscateField: import("typesafe-actions").PayloadAC<"OBFUSCATE", string>;
export declare const updateTemplates: import("typesafe-actions").PayloadAC<"UPDATE_TEMPLATES", {
    id: string;
    label: string;
    type: string;
}[]>;
export declare type FrameActions = ActionType<typeof updateHeight | typeof obfuscateField | typeof updateTemplates>;
export declare type FrameActionsHandler = (action: FrameActions) => void;
/**
 * @deprecated use FrameActions
 */
export declare type LegacyFrameActions = {
    updateHeight: (height: number) => void;
    updateTemplates: (templates: Array<{
        id: string;
        label: string;
        type: string;
    }>) => void;
    handleObfuscation: (field: string) => void;
};
