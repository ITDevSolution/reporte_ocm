
import { useQuery } from '@tanstack/react-query';

interface SalesDataParams {
  company: string;
  branch: string;
  ocmId: string;
}

const fetchSalesData = async ({ company, branch, ocmId }: SalesDataParams) => {
  const url = `https://api.mym.com.pe:9443/api/v1/orden-embarque/ocm?company=${company}&branch=${branch}&ocmId=${ocmId}`;
  
  console.log('Fetching sales data from:', url);
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching sales data: ${response.status}`);
  }
  
  const data = await response.json();
  console.log('Sales data received:', data);
  
  return data;
};

export const useOCMData = (company: string, branch: string, ocmId: string) => {
  return useQuery({
    queryKey: ['salesData', company, branch, ocmId],
    queryFn: () => fetchSalesData({ company, branch, ocmId }),
    enabled: !!company && !!branch && !!ocmId,
    staleTime: 5 * 60 * 1000, // 5 minutos
    retry: 3,
  });
};
