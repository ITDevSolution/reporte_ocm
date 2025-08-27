
import React from 'react';
interface ItemsTableProps {
  data: {
    cabecera?: {
      MCIMPOCM: string;
      EUDSCABRMON: string;
    };
    detalle?: Array<{
      MDCODLIN: string;
      MDCODART: string;
      MDCODORI: string;
      MDCODMAR: string;
      MDCODFAB: string;
      MDCANCOM: string;
      MDPREUNI: string;
      MKEYDSCLAR: string;
      EDDESART: string;
      EDPARTARAN: string;
    }>;
  };
}

const ItemsTable: React.FC<ItemsTableProps> = ({ data }) => {
  const cabecera = data?.cabecera || {};
  const items = data?.detalle || [];
  return (
    <div className="mb-4">
      <table className="w-full border-collapse border border-document-border">
        <thead>
          <tr className="bg-document-section">
            <th className="border border-document-border p-2 text-xs font-bold text-center">LN</th>
            <th className="border border-document-border p-2 text-xs font-bold text-center">CODIGO</th>
            <th className="border border-document-border p-2 text-xs font-bold text-center">ORIGEN</th>
            <th className="border border-document-border p-2 text-xs font-bold text-center">MARCA</th>
            <th className="border border-document-border p-2 text-xs font-bold text-center">CODIGO DE FABRICANTE</th>
            <th className="border border-document-border p-2 text-xs font-bold text-center">DESCRIPCION</th>
            <th className="border border-document-border p-2 text-xs font-bold text-center">CANTIDAD</th>
            <th className="border border-document-border p-2 text-xs font-bold text-center">PRECIO UNITARIO</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index)=>(
            <tr key={index} className="border-b">
              <td className="border border-document-border p-2 text-xs">{item.MDCODLIN}</td>
              <td className="border border-document-border p-2 text-xs">{item.MDCODART}</td>
              <td className="border border-document-border p-2 text-xs">{item.MDCODORI}</td>
              <td className="border border-document-border p-2 text-xs">{item.MDCODMAR}</td>
              <td className="border border-document-border p-2 text-xs">{item.MDCODFAB}</td>
              <td className="border border-document-border p-2 text-xs">{item.EDDESART}</td>
              <td className="border border-document-border p-2 text-xs text-center">{item.MDCANCOM}</td>
              <td className="border border-document-border p-2 text-xs text-center">{item.MDPREUNI}</td>
            </tr>
          ))}
          {/* Empty rows for spacing */}
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td className="border border-document-border p-2 text-xs">&nbsp;</td>
              <td className="border border-document-border p-2 text-xs">&nbsp;</td>
              <td className="border border-document-border p-2 text-xs">&nbsp;</td>
              <td className="border border-document-border p-2 text-xs">&nbsp;</td>
              <td className="border border-document-border p-2 text-xs">&nbsp;</td>
              <td className="border border-document-border p-2 text-xs">&nbsp;</td>
              <td className="border border-document-border p-2 text-xs">&nbsp;</td>
              <td className="border border-document-border p-2 text-xs">&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Totals */}
      <div className="flex justify-end mt-2">
        <table className="border-collapse border border-document-border">
          <tbody>
            <tr>
              <td className="border border-document-border p-2 text-sm font-bold bg-document-section">IMPORTE TOTAL</td>
              <td className="border border-document-border p-2 text-sm text-right">{cabecera.EUDSCABRMON} {cabecera.MCIMPOCM}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemsTable;
