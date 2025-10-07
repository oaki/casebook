'use client';
import { FC } from "react";
import { styled, TableCell, TableCellProps } from "@mui/material";

export const StyledTableCell: FC<TableCellProps> = ({ component = 'th', scope = 'row', ...props }) => {
    return <StyledTableCellBase component={component} scope={scope} {...props} />;
};

const StyledTableCellBase = styled(TableCell)<TableCellProps>(({ component }) => ({
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    paddingTop: '12px',
    paddingLeft: 0,
    fontSize: '18px',
    fontWeight: component === 'th' ? 700 : 'normal',
}));
