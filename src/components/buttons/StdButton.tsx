import { Button } from "@nextui-org/react";

interface StdButtonProps {
    text: string;
}

export function StdButton({ text }: StdButtonProps) {
    return (
        <Button className="py-[1.5rem] px-[3.11rem]" style={{
            borderRadius: '1.76963rem',
            background: 'var(--Azure-Radiance-500, #3B7EFF)',
            boxShadow: '-14.645px -14.645px 14.645px 0px #599EFF inset, 14.645px 14.645px 14.645px 0px #1B57F5 inset'
        }}>
            <span className="font-outfit" style={{
                color: 'var(--Sun-50, #FFFDEA)',
                fontSize: '1.26281rem',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal'
            }}>
                {text}
            </span>

        </Button>
    );
}
