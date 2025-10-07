'use client';
import { FC, ReactNode } from "react";
import { TableRow } from "@mui/material";
import { StyledTableCell } from "@/components/case/caseDetail/StyledTableCell";

export const InfoRow: FC<InfoRowProps> = ({ label, value, isHeader = true }) => {
    return (
        <TableRow>
            {isHeader ? (
                <StyledTableCell sx={{ width: '40%' }}>
                    {label}
                </StyledTableCell>
            ) : (
                <StyledTableCell component="td">
                    {label}
                </StyledTableCell>
            )}
            <StyledTableCell component="td">
                {value}
            </StyledTableCell>
        </TableRow>
    );
};

type InfoRowProps = {
    label: string;
    value: ReactNode;
    isHeader?: boolean;
};
