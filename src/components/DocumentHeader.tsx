
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
    <div className="border-document-border p-4">
      <div className="flex items-start justify-between">
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-34 h-24 flex items-center justify-center">
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
          <div className="text-document-text text-left">
            <div className="font-bold text-sm">{empresa.RAZONSOC}</div>
            <div className="text-xs">RUC.: {empresa.RUCCIA}</div>
            <div className="text-xs">Ofc Principal: Av. Nicolas Arriola 1723 - La Victoria</div>
            <div className="text-xs">Ofc: CAL.LOS TAPICEROS NRO. 280 LIMA - LIMA - ATE</div>
            <div className="text-xs">Telf.: 613-1500 Fax: 613-1514 -La Victoria - Lima - Perú</div>
          </div>
        </div>
        
        {/* Order Info */}
        <div className="text-right">
          <div className="py-2 font-bold text-2xl rounded">
            ORDEN DE COMPRA
          </div>
          <div className="mt-4 text-lg"><strong>OC N°: {numeroOCM}</strong></div>
          <div className="text-document-text text-right text-xs mt-4">
            <div >Fecha Emisión: {formatFecha(cabecera.MCFECOCM)}</div>
            <div >Contacto: {vendedor.BMPRNOMBV} {vendedor.BMSGNOMBV} {vendedor.BMPRAPLLV} {vendedor.BMSGAPLLV}</div>
            <div >Correo: dmiranda@mym.com.pe</div>
            <div >Celular: 939217383</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentHeader;
