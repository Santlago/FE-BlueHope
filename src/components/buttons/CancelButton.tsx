import { Button } from "@nextui-org/react";

interface CancelButtonProps {
    text: string;
}

export function CancelButton({ text }: CancelButtonProps) {
    return (
        <Button className="rounded-[3.625rem] w-[9.7rem]" 
            variant="solid"
            color="danger"
            
        >
            <span className="font-outfit text-white" style={{
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
