import { RefObject } from "react";
import { FrameActionsHandler, LegacyFrameActions } from "./frame.actions";
import { HostActionsHandler, LegacyHostActions } from "./host.actions";
interface UseParentFrameProps {
    dispatch: HostActionsHandler;
}
export declare const useParentFrame: ({ dispatch, }: UseParentFrameProps) => [boolean, {
    dispatch: FrameActionsHandler;
}];
interface UseChildrenFrameProps {
    dispatch: FrameActionsHandler;
    methods: LegacyFrameActions;
    iframe: RefObject<HTMLIFrameElement>;
}
export declare const useChildFrame: (props: UseChildrenFrameProps) => [boolean, {
    dispatch?: HostActionsHandler;
} & Partial<LegacyHostActions>];
export {};
