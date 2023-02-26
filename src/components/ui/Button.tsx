import {FC, ReactNode} from "react";

interface Props {
    onClick: () => void,
    children?: ReactNode
}

export const Button: FC<Props> = ({
    onClick,
    children
  }) => {
    return (
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {children}
        </button>
    )
}