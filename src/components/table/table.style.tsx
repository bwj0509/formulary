import styled from "styled-components";

export const Table = styled.table`
  border: 1px solid #ddd;
  border-collapse: collapse;
  margin: 20px 10px;
  color: #333333;
`;

export const Thead = styled.thead`
  background-color: #f2f2f2;
  margin: 10px;
`;

export const Td = styled.td<{ align?: string }>`
  border: 1px solid #ddd;
  text-align: ${(props) => props.align};
  padding: 4px;
`;

export const Tr = styled.tr`
  border: 1px solid #ddd;
`;

export const Th = styled.th<{ padding?: string }>`
  border: 1px solid #ddd;
  padding: ${(props) => props.padding};
`;
