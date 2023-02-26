import {FC, ReactNode} from "react";

interface Props {
    children?: ReactNode
}

export const ButtonGroup: FC<Props> = ({children}) => {
    return (
        <div className="flex gap-3">{children}</div>
    )
}