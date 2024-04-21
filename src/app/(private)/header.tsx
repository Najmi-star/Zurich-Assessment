import { ReactNode } from "react";

export function Header({
    children,
}: {
    children?: ReactNode;
}){
    return (
        <section>
            <div>header</div>
        </section>
    )
}