import { Tooltip } from "antd";

interface Props {
    title: string;
    children: React.ReactNode;
}

export const CustomTooltip = ({ title, children }: Props) => {
    return (
        <Tooltip title={title}>
            {children}
        </Tooltip>
    );
}