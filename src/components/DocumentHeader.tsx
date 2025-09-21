
import React from 'react';

// Define la interfaz para los props
interface DocumentHeaderProps {
  data: {
    empresa?: {
      RAZONSOC: string;
      RUCCIA: string;
      DIRECCION: {
        ALDSCDIRMM: string;
        ALNRODIRMM: string;
      };
    };
    cabecera?: {
      MCNROOCM: string;
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
      correo: string;
      celular: string;
    };
  };
}

const DocumentHeader: React.FC<DocumentHeaderProps> = ({ data })  => {

  const empresa = data?.empresa || {
    RAZONSOC: 'M&M REPUESTOS Y SERVICIOS S.A.',
    RUCCIA: '20101759686',
    DIRECCION: {
      ALDSCDIRMM: 'Nicolás Arriola',
      ALNRODIRMM: '1723'
    }
  };
  const numeroOCM = data?.cabecera?.MCNROOCM ? 
  data.cabecera.MCNROOCM.padStart(7, '0') : '0101270';

  const cabecera = data?.cabecera || {};
  const vendedor = data?.vendedor || {};

  // Formatear fecha si existe
  const formatFecha = (fechaStr: string) => {
    if (!fechaStr) return '';
    const year = fechaStr.substring(0, 4);
    const month = fechaStr.substring(4, 6);
    const day = fechaStr.substring(6, 8);
    return `${day}-${month}-${year}`;
  };
    
  return (
    <div className="border-document-border p-0 mb-5">
      <div className="flex items-start justify-between">
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-0">
          <div className="w-32 h-20 flex items-center justify-center">
            <img 
              src="/mym_logo.png" 
              alt="Logo M&M" 
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                // Si el logo no carga, muestra el texto como fallback
                const target = e.target as HTMLElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = '<div class="text-document-header font-bold text-xl">M&M</div>';
              }}
            />
          </div>
          <div className="text-gray-600 font-bold text-left">
            <div className="font-bold text-sm">{empresa.RAZONSOC}</div>
            <div className="text-xs">RUC.: {empresa.RUCCIA}</div>
            <div className="text-xs">Ofc Principal: Av. Nicolas Arriola 1723 - La Victoria</div>
            <div className="text-xs">Ofc: Cal.Los Tapiceros Nro. 280 Lima - Lima - Ate</div>
            <div className="text-xs">Telf: 613-1500 Fax: 613-1514 -La Victoria - Lima - Perú</div>
          </div>
        </div>
        
        {/* Order Info */}
        <div className="text-left">
          <div className="py-0 text-document-primary font-bold text-2xl">
            ORDEN DE COMPRA
          </div>
          <div className="text-document-primary font-bold text-lg">OCM: <span className='text-gray-600'>{numeroOCM}</span></div>
          <div className="text-document-text text-xs mt-5">
            <div className='text-gray-600 font-bold'>Fecha Emisión: {formatFecha(cabecera.MCFECOCM)}
            </div>
            <div className='text-gray-600 font-bold'>Contacto: {vendedor.BMPRNOMBV} {vendedor.BMSGNOMBV} {vendedor.BMPRAPLLV} {vendedor.BMSGAPLLV}
            </div>
            <div className='text-gray-600 font-bold'>Correo: {vendedor.correo}</div>
            <div className='text-gray-600 font-bold'>Celular: {vendedor.celular}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentHeader;
