import { ReactElement, ReactNode } from "react";
import "./Column.css"

interface ColumnProps {
    title: string,
    children: ReactNode | ReactNode[]
}

const Column: (arg: ColumnProps) => ReactElement = ({ title, children }) => {
    return (
        <div className="column">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Column;