
import React from 'react';

interface OrderInfoProps {
  data: {
    cabecera?: {
      MCFECOCM: string;
      MCUSR: string;
      BMNROINCOTERMS: string;
      EUDSCABRMON: string;
      EUDSCCORMON: string;
      FEDSCCOR: string;
      FEDSCLAR: string;
      fecha_atencion: string;
    };
    vendedor?: {
      BMPRNOMBV: string;
      BMSGNOMBV: string;
      BMPRAPLLV: string;
      BMSGAPLLV: string;
      CONTACTO: {
        NKTELDIR: string;
        NKTELPE1: string;
      };
    };
    condiciones?: {
      BOCODFRMPAG: string;
    };
    proveedores?: Array<{
      AHCODPRV: string;
      AHRAZSOCPRV: string;
    }>;
  };
}

const OrderInfo: React.FC<OrderInfoProps> = ({ data }) => {
  const cabecera = data?.cabecera || {};
  const vendedor = data?.vendedor || {};
  const condiciones = data?.condiciones || {};
  const proveedores = data?.proveedores || [];

  // Formatear fecha si existe
  const formatFecha = (fechaStr: string) => {
    if (!fechaStr) return '';
    const year = fechaStr.substring(0, 4);
    const month = fechaStr.substring(4, 6);
    const day = fechaStr.substring(6, 8);
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      {/* Left Column */}
      <div className="space-y-4">
        <div className="border border-document-border p-3 bg-document-section text-sm">
          {/* <div className="grid grid-cols-1 gap-x-4 text-sm"> */}
            <div className="mt-1"><strong>Fecha Emisión:</strong> {formatFecha(cabecera.MCFECOCM)}</div>
            <div className="mt-1"><strong>Usuario:</strong> {vendedor.BMPRNOMBV} {vendedor.BMSGNOMBV} {vendedor.BMPRAPLLV} {vendedor.BMSGAPLLV}</div>
            <div className="mt-1"><strong>Teléfono / Móvil: {vendedor.CONTACTO?.NKTELDIR} {vendedor.CONTACTO?.NKTELPE1}</strong></div>
            <div className="mt-1"><strong>Fecha de consulta y/o impresión:</strong> 25-08-2025 12:05:44</div>
          {/* </div> */}
        </div>
        
        <div className="border border-document-border p-3 bg-document-section text-sm">
          {proveedores.map((item, index) => (
            <div key={index}>
              <div className="mt-1"><strong>Proveedor: </strong> {item.AHCODPRV}</div>
              <div className="mt-1"><strong>Razon Social: </strong> {item.AHRAZSOCPRV}</div>
            </div>
          ))}
          <div className="mt-1"><strong>RUC</strong></div>
          <div className="mt-1"><strong>Dirección: </strong></div>
          <div className="mt-1">AV. Rua Sadao Takagi 2000</div>
          <div className="mt-1">EXTRANJERO EXTRANJERO EXTRANJERO</div>
        </div>
      </div>
      
      {/* Right Column */}
      <div className="space-y-4">
        <div className="border border-document-border p-3 bg-document-section text-sm">
            <div><strong>Condiciones de Pago: </strong> {condiciones.BOCODFRMPAG}</div>
            <div className="mt-1"><strong>Moneda: </strong> {cabecera.EUDSCABRMON} {cabecera.EUDSCCORMON}</div>
            <div className="mt-1"><strong>Tipo Orden : </strong></div>
            <div className="mt-1"><strong>Origen Orden : </strong></div>
            <div className="mt-1"><strong>Incoterms : </strong>{cabecera.BMNROINCOTERMS}</div>
            <div className="mt-1"><strong>Pais: </strong> {cabecera.FEDSCCOR} {cabecera.FEDSCLAR}</div>
            <div className="mt-1"><strong>Fecha de atencion: </strong> {cabecera.fecha_atencion}</div>
        </div>
        
        <div className="border border-document-border p-3 bg-document-section text-center text-sm">
          <div className="mt-1"><strong>Horario de Atención:</strong></div>
          <div className="mt-1">Lunes a Viernes de 8:30am. a 6:00pm.</div>
          <div className="mt-1">Sábados de 8:30am a 2:00pm.</div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
