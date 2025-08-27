
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
    data.cabecera.MCNROOCM.padStart(7, '0') : 
    '0101270';
    
  return (
    <div className="border border-document-border bg-document-section p-4 mb-4">
      <div className="flex items-start justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="w-24 h-20 rounded-lg flex items-center justify-center">
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
          <div className="text-sm text-document-text">
            <div className="font-bold text-lg">{empresa.RAZONSOC}</div>
            <div>RUC.: {empresa.RUCCIA}</div>
            <div>Ofc Principal: Av. Nicolas Arriola 1723 - La Victoria</div>
            <div>Ofc: CAL.LOS TAPICEROS NRO. 280 (LOTIZACION EL ARTESANO MZ. C9) - LIMA - LIMA - ATE</div>
            <div>Telf.: 613-1500 Fax: 613-1514 -La Victoria - Lima - Perú</div>
          </div>
        </div>
        
        {/* Order Info */}
        <div className="text-right">
          <div className="bg-document-border text-document-text px-4 py-2 font-bold text-lg rounded">
            ORDEN DE COMPRA
          </div>
          <div className="mt-2 text-xl">
            <div><strong>Nro OCM: {numeroOCM}</strong></div>
            {/* <div className="mt-4">
              <div><strong>Dirección de Cobranza:</strong></div>
              <div>Av. Nicolás Arriola 1473 La Victoria Lima Lima</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentHeader;
