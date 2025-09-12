
import React from 'react';
import { Package, Hash, MapPin, Tag, FileText, Calculator, DollarSign } from 'lucide-react';

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

  const formatoCuatroDecimales = (valor: number): string => {
    return valor.toLocaleString('es-ES', {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4
    });
  };

  // calcular el total sumando todos los subtotales
  const total = items.reduce((sum, item) => {
    return sum + calcularSubtotal(item.MDCANCOM, item.MDPREUNI);
  }, 0);

  return (
    <div className="mb-4 bg-document-white rounded-b-xl shadow-card border border-document-border/30 overflow-hidden">
      {/* Table Header */}
      <div className="bg-gradient-header rounded-t-xl p-4 shadow-header">
        <h3 className="text-lg font-bold text-document-white flex items-center gap-2">
          <Package className="w-6 h-6" />
          Detalle de Artículos
        </h3>
      </div>
      <table className="w-full border-collapse border border-document-border">
        <thead>
          <tr className="bg-document-section border-b-2 border-document-primary/20">
            <th className="border border-document-border p-0 text-document-primary text-xs font-bold text-center">Item N°</th>
            <th className="border border-document-border p-2 text-document-primary text-xs font-bold text-center">LN</th>
            <th className="border border-document-border p-2 text-document-primary text-xs font-bold text-center">CODIGO ARTÍCULO</th>
            <th className="border border-document-border p-1 text-document-primary text-xs font-bold text-center">ORIGEN</th>
            <th className="border border-document-border p-2 text-document-primary text-xs font-bold text-center">MARCA</th>
            <th className="border border-document-border p-2 text-document-primary text-xs font-bold text-center">CODIGO FABRICANTE</th>
            <th className="border border-document-border p-2 text-document-primary text-xs font-bold text-center">DESCRIPCION</th>
            <th className="border border-document-border p-2 text-document-primary text-xs font-bold text-center">CANTIDAD</th>
            <th className="border border-document-border p-2 text-document-primary text-xs font-bold text-center">PRECIO UNI</th>
            <th className="border border-document-border p-2 text-document-primary text-xs font-bold text-center">SUB TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index)=>{
            const subtotal = calcularSubtotal(item.MDCANCOM, item.MDPREUNI);
            return (
              <tr key={index} className="border-b">
                <td className="border border-document-border p-2 text-xs text-center text-gray-600">{index+1}</td>
                <td className="border border-document-border p-2 text-xs text-center text-gray-600">{item.MDCODLIN}</td>
                <td className="border border-document-border p-2 text-xs text-gray-600">{item.MDCODART}</td>
                <td className="border border-document-border p-2 text-xs text-gray-600 text-center">{item.MDCODORI}</td>
                <td className="border border-document-border p-2 text-xs text-gray-600">{item.MDCODMAR} {item.MKEYDSCLAR}</td>
                <td className="border border-document-border p-2 text-xs text-gray-600">{item.MDCODFAB}</td>
                <td className="border border-document-border p-2 text-xs text-gray-600">
                  <div className="max-w-[120px] break-words whitespace-pre-line">
                    <div className="font-medium">{item.EDDESART}</div>
                  </div>
                </td>
                <td className="border border-document-border p-2 text-xs text-center">{item.MDCANCOM}</td>
                <td className="border border-document-border p-2 text-xs text-center">{formatoCuatroDecimales(parseFloat(item.MDPREUNI))}</td>
                <td className="border border-document-border p-2 text-xs text-center">
                  {formatoCuatroDecimales(subtotal)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      {/* Totals */}
      <div className="bg-gradient-header border-t-2 border-document-primary/20 p-4">
        <div className="flex justify-end">
          <div className="bg-document-white rounded-xl shadow-card p-5 min-w-30">
              <h4 className="text-sm font-bold text-document-primary mb-4 flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                IMPORTE TOTAL
              </h4>
              <div className="text-document-primary font-bold text-lg">{cabecera.EUDSCABRMON} {cabecera.MCIMPOCM || formatoMoneda(total)}</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsTable;
