import React, { memo } from "react";
import PropTypes from "prop-types";

import { TableWrapper } from "./styles";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function MappingTable({
  mappingHeaders,
  mappingRows,
  mappingRowsHeaders,
  headersMappingOptions,
  onChangeMapping,
  onDeleteRow,
  onlyFistRow,
}) {
  return (
    <TableWrapper>
      <table>
        <TableHeader
          headers={mappingHeaders}
          headersSelectOptions={headersMappingOptions}
          onChangeSelect={onChangeMapping}
        />
        <TableBody
          rows={mappingRows}
          headers={mappingRowsHeaders}
          onDeleteItem={onDeleteRow}
          onlyFistRow={onlyFistRow}
        />
      </table>
    </TableWrapper>
  );
}

MappingTable.defaultProps = {
  mappingHeaders: [],
  mappingRows: [],
  mappingRowsHeaders: [],
  headersMappingOptions: [],
  onChangeMapping: () => {},
  onDeleteRow: () => {},
  onlyFistRow: false,
};

MappingTable.propTypes = {
  mappingHeaders: PropTypes.array,
  mappingRows: PropTypes.array,
  mappingRowsHeaders: PropTypes.array,
  headersMappingOptions: PropTypes.array,
  onChangeMapping: PropTypes.func,
  onDeleteRow: PropTypes.func,
  onlyFistRow: PropTypes.bool,
};

export default memo(MappingTable);
