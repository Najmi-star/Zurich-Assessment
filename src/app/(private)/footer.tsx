import { ReactNode } from "react";

export function Footer({
    children,
}: {
    children?: ReactNode;
}){
    return (
        <section className='w-full bg-white sticky border-2 b-slate-500 flex-none'>
        <div className='h-12 flex justify-between py-2 px-8'>
            <div>@ Right reserved 2024</div>
        </div>
      </section>
    )
}