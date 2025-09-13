
import React from 'react';
import { AlertTriangle, FileCheck, Users, Building, Shield } from 'lucide-react';
const DocumentFooter = () => {
  return (
    // <div className="space-y-0">
    //   {/* Warning/Penalty Clause Section */}
    //   <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-xl p-6 shadow-card">
    //     <div className="flex items-start gap-3">
    //       <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
    //       <div>
    //         <h4 className="font-bold text-yellow-800 mb-3 text-lg">Cláusula de Penalidad</h4>
    //         <div className="text-yellow-700 text-sm space-y-2 leading-relaxed">
    //           <p>
    //             M&M Repuestos y Servicios S.A., podrá aplicar penalidad por incumplimiento de entrega en la fecha acordada, pudiendo reservarse el derecho sobre la aceptación del servicio o producto. No obstante el proveedor deberá hacer los esfuerzos necesarios a su cargo para la realización del objeto contratado, sin que esto signifique en la fecha definida en la orden de compra.
    //           </p>
              
    //           <div className="mt-4 space-y-1 text-xs">
    //             <div className="flex items-start gap-2">
    //               <Shield className="w-3 h-3 text-yellow-600 flex-shrink-0 mt-0.5" />
    //               <span>El proveedor acepta los términos y condiciones de la orden de compra.</span>
    //             </div>
    //             <div className="flex items-start gap-2">
    //               <Shield className="w-3 h-3 text-yellow-600 flex-shrink-0 mt-0.5" />
    //               <span>El proveedor se obliga a entregar productos/servicios de acuerdo a las características especificadas, garantizando que los productos y suministros, o el servicio son de primera calidad.</span>
    //             </div>
    //             <div className="flex items-start gap-2">
    //               <Shield className="w-3 h-3 text-yellow-600 flex-shrink-0 mt-0.5" />
    //               <span>La Factura deberá consignar las referencias de la orden de compra.</span>
    //             </div>
    //             <div className="flex items-start gap-2">
    //               <Shield className="w-3 h-3 text-yellow-600 flex-shrink-0 mt-0.5" />
    //               <span>Enviar Factura en formato PDF, XML y Packing List.</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="space-y-2">
      <div className="space-y-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-xl shadow-card p-2">
      {/* Penalty Clause */}
      <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-yellow-800 mb-3 text-lg">Términos y Condiciones</h4>
            <div className="text-yellow-700 text-xs space-y-2 leading-relaxed">
              <p>
                M&M Repuestos y Servicios S.A., podrá aplicar penalidad por incumplimiento de entrega en la fecha acordada, pudiendo reservarse el derecho sobre la aceptación del servicio o producto. No obstante el proveedor deberá hacer los esfuerzos necesarios a su cargo para la realización del objeto contratado, sin que esto signifique en la fecha definida en la orden de compra.
              </p>
              
              <div className="mt-4 space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <Shield className="w-3 h-3 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span>El proveedor acepta los términos y condiciones de la orden de compra.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-3 h-3 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span>El proveedor se obliga a entregar productos/servicios de acuerdo a las características especificadas, garantizando que los productos y suministros, o el servicio son de primera calidad.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-3 h-3 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span>La Factura deberá consignar las referencias de la orden de compra.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-3 h-3 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span>Enviar Factura en formato PDF, XML y Packing List.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      {/* Document Footer with Professional Info */}
      <div className="bg-gradient-header rounded-xl p-2 shadow-header">
        <div className="text-center text-slate-50">
          <div className="text-sm">
            Este documento ha sido generado digitalmente por <span className='text-gray-700 font-semibold'>M&M Repuestos y Servicios S.A.</span>
          </div>
          {/* <div className="text-xs mt-1">
            Para consultas: comercial@mym.com.pe | Tel: 613-1500
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DocumentFooter;
