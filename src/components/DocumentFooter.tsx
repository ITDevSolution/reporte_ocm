
import React from 'react';

const DocumentFooter = () => {
  return (
    <div className="space-y-4">
      {/* Penalty Clause */}
      <div className="border border-document-border p-4 bg-document-section">
        <div className="font-bold text-sm mb-2">CLAUSULA DE PENALIDAD:</div>
        <div className="text-xs space-y-1">
          <div>M&M Repuestos y Servicios S.A., podrá aplicar penalidad por incumplimiento de entrega en la fecha acordada, pudiendo reservarse el derecho sobre la aceptación del servicio o producto. No obstante el proveedor deberá hacer los esfuerzos necesarios a su cargo para la realización del objeto contratado, sin que esto signifique en la fecha definida en la orden de compra.</div>
          <div className="mt-2">- El proveedor acepta los términos y condiciones de la orden de compra.</div>
          <div>- El proveedor se obliga a entregar productos/servicios de acuerdo a las características especificadas, garantizando que los productos y suministros, o el servicio son de primera calidad.</div>
          <div>- La Factura deberá consignar las referencias de la orden de compra.</div>
          <div>- Enviar Factura en formato PDF, XML y Packing List.</div>
        </div>
      </div>
      
      {/* Signatures */}
      {/* <div className="flex justify-between items-end pt-8">
        <div className="text-center">
          <div className="border-t border-document-border w-40 mx-auto mb-1"></div>
          <div className="text-sm">Proveedor</div>
        </div>
        <div className="text-center">
          <div className="border-t border-document-border w-40 mx-auto mb-1"></div>
          <div className="text-sm">V°B° Resp. de Compras</div>
        </div>
        <div className="text-center">
          <div className="border-t border-document-border w-40 mx-auto mb-1"></div>
          <div className="text-sm">p.M&M Respuestos y Servicios S.A.</div>
        </div>
      </div> */}
    </div>
  );
};

export default DocumentFooter;
