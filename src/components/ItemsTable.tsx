
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
    }>;
  };
}

const ItemsTable: React.FC<ItemsTableProps> = ({ data }) => {
  const cabecera = data?.cabecera || {};
  const items = data?.detalle || [];

  // calcular el subtotal
  const calcularSubtotal = (cantidad: string, precio: string): number => {
    const cant = parseFloat(cantidad) || 0;
    const prec = parseFloat(precio) || 0;
    return cant * prec;
  };

  // formatear numeros
  const formatoMoneda = (valor: number): string => {
    return valor.toFixed(2);
  };

  // calcular el total sumando todos los subtotales
  const total = items.reduce((sum, item) => {
    return sum + calcularSubtotal(item.MDCANCOM, item.MDPREUNI);
  }, 0);

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
            <th className="border border-document-border p-2 text-xs font-bold text-center">PRECIO UNI</th>
            <th className="border border-document-border p-2 text-xs font-bold text-center">SUB TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index)=>{
            const subtotal = calcularSubtotal(item.MDCANCOM, item.MDPREUNI);
            return (
              <tr key={index} className="border-b">
                <td className="border border-document-border p-2 text-xs">{item.MDCODLIN}</td>
                <td className="border border-document-border p-2 text-xs">{item.MDCODART}</td>
                <td className="border border-document-border p-2 text-xs">{item.MDCODORI}</td>
                <td className="border border-document-border p-2 text-xs">{item.MDCODMAR}</td>
                <td className="border border-document-border p-2 text-xs">{item.MDCODFAB}</td>
                <td className="border border-document-border p-2 text-xs">{item.EDDESART}</td>
                <td className="border border-document-border p-2 text-xs text-center">{item.MDCANCOM}</td>
                <td className="border border-document-border p-2 text-xs text-center">{item.MDPREUNI}</td>
                <td className="border border-document-border p-2 text-xs text-center">
                  {formatoMoneda(subtotal)}
                </td>
              </tr>
            );
          })}
          {/* Empty rows for spacing */}
          {Array.from({ length: Math.max(0, 10 - items.length) }).map((_, index) => (
            <tr key={`empty-${index}`}>
              <td className="border border-document-border p-2 text-xs">&nbsp;</td>
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
              <td className="border border-document-border p-2 text-sm text-right font-bold">{cabecera.EUDSCABRMON} {cabecera.MCIMPOCM || formatoMoneda(total)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemsTable;
