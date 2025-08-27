
import React from 'react';
import DocumentHeader from '../components/DocumentHeader';
import OrderInfo from '../components/OrderInfo';
import ItemsTable from '../components/ItemsTable';
import DocumentFooter from '../components/DocumentFooter';
import { Button } from '@/components/ui/button';
import { Printer,Loader2 } from 'lucide-react';
import { useOCMData } from '@/hooks/useOCMData';
import { useSearchParams } from 'react-router-dom';

const Index = () => {
  const [searchParams] = useSearchParams();
  const company = searchParams.get('company') || '10';
  const branch = searchParams.get('branch') || '01';
  const ocmId = searchParams.get('ocmId') || '091626';

  console.log('URL Parameters:', { company, branch, ocmId });

  const { data, isLoading, error } = useOCMData(company, branch, ocmId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-600">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="text-lg">Cargando datos de reporte OCM...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-red-600 text-lg">
          Error: {error.message}
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-slate-600 text-lg">
          No se encontraron datos
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Print Button */}
        <div className="no-print mb-4 flex justify-end">
          <Button onClick={handlePrint} className="flex items-center gap-2">
            <Printer className="w-4 h-4" />
            Imprimir
          </Button>
        </div>
        
        {/* Document Container */}
        <div className="document-container bg-white shadow-lg rounded-lg p-6">
          <DocumentHeader data={data}/>
          <OrderInfo data={data}/>
          <ItemsTable data={data}/>
          <DocumentFooter data={data}/>
        </div>
      </div>
    </div>
  );
};

export default Index;
