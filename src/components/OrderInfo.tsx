
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
      nombre_puerto: string;
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
      PRCODPRV: string;
      PRRAZSOC: string;
      PRCORREO: string;
      PRCONTAC: string;
    }>;
    proveedorAlternativo?: {
      PRCODPRV: string;
      PRRAZSOC: string;
      PRCORREO: string;
      PRCONTAC: string;
    };
  };
}

const OrderInfo: React.FC<OrderInfoProps> = ({ data }) => {
  const cabecera = data?.cabecera || {};
  const vendedor = data?.vendedor || {};
  const condiciones = data?.condiciones || {};
  const proveedores = (data?.proveedores && data.proveedores.length > 0
      ? data.proveedores
      : data?.proveedorAlternativo
      ? [data.proveedorAlternativo] // si existe proveedorAlternativo se convierte a array
      : []);

  // Formatear fecha si existe
  const formatFecha = (fechaStr: string) => {
    if (!fechaStr) return '';
    const year = fechaStr.substring(0, 4);
    const month = fechaStr.substring(4, 6);
    const day = fechaStr.substring(6, 8);
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="grid grid-cols-2 gap-2 mb-4 mt-2">
      {/* Left Column */}
      <div className="space-y-4">        
        <div className="p-0 text-xs">
          {proveedores.map((item, index) => (
            <div key={index}>
              <div className="text-document-primary font-bold"><strong>Proveedor: </strong> <span className='text-gray-600'>{item.PRCODPRV}</span></div>
              <div className="text-document-primary font-bold"><strong>Razon Social: </strong> <span className='text-gray-600'>{item.PRRAZSOC}</span></div>
              <div className="text-document-primary font-bold"><strong>Contacto: </strong> <span className='text-gray-600'>{item.PRCONTAC}</span></div>
              <div className="text-document-primary font-bold"><strong>Correo: </strong> <span className='text-gray-600'>{item.PRCORREO}</span></div>
            </div>
          ))}
          <div className="text-document-primary font-bold"><strong>Pais: </strong> <span className='text-gray-600'>{cabecera.FEDSCCOR}</span></div>
        </div>
      </div>
      {/* Right Column */}
      <div className="space-y-1">
        <div className="p-0 text-xs">  
          <div className='text-document-primary font-bold'><strong>Condiciones de Pago:</strong> <span className='text-gray-600'>{condiciones.BOCODFRMPAG}</span></div>
          <div className="text-document-primary font-bold"><strong>Moneda: </strong> <span className='text-gray-600'>{cabecera.EUDSCABRMON} {cabecera.EUDSCCORMON}</span></div>
          <div className="text-document-primary font-bold"><strong>Incoterms : </strong> <span className='text-gray-600'>{cabecera.BMNROINCOTERMS} {cabecera.nombre_puerto}</span></div>
          <div className="text-document-primary font-bold"><strong>Fecha de atencion: </strong> <span className='text-gray-600'>{cabecera.fecha_atencion}</span></div>
       </div>
      </div>
      {/* <div className="p-3 text-xs">
        <div className="grid grid-cols-1 gap-x-4 text-sm">
          <div className="mt-1"><strong>Fecha Emisión:</strong> {formatFecha(cabecera.MCFECOCM)}</div>
          <div className="mt-1"><strong>Usuario:</strong> {vendedor.BMPRNOMBV} {vendedor.BMSGNOMBV} {vendedor.BMPRAPLLV} {vendedor.BMSGAPLLV}</div>
          <div className="mt-1"><strong>Teléfono / Móvil: {vendedor.CONTACTO?.NKTELDIR} {vendedor.CONTACTO?.NKTELPE1}</strong></div>
          <div className="mt-1"><strong>Fecha de consulta y/o impresión:</strong> 25-08-2025 12:05:44</div>
        </div>
      </div> */}
    </div>
  );
};

export default OrderInfo;
