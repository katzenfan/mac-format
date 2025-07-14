import useAutosizeTextArea from "./UseAutosizeTextArea"
import { ReactElement, useRef } from "react";

interface AutoGrowingTextareaProps {
    text: string;
    placeholder: string;
    onChange: (value: string) => any;
}

const AutoGrowingTextarea: (arg: AutoGrowingTextareaProps) => ReactElement = ({ text, onChange, placeholder = "" }) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    //@ts-expect-error
    useAutosizeTextArea(text, textAreaRef);

    return (
        <textarea
            value={text}
            ref={textAreaRef}
            rows={1}
            onChange={event => onChange(event.target.value)}
            placeholder={placeholder}
        ></textarea>
    )
}

export default AutoGrowingTextarea;