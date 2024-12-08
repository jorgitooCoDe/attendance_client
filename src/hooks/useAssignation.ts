import { useState, useEffect } from 'react';
import { GroupStatisticsResponseEntity } from '../types/apiResponseEntities';
import { getAssignationByGroupID } from '../services/assignationService';

interface UseAssignationByGroupIDResult {
  assignations: GroupStatisticsResponseEntity[];
  loading: boolean;
  error: string | null;
}

export const useAssignationByGroupID = (groupId: number): UseAssignationByGroupIDResult => {
  const [assignations, setAssignations] = useState<GroupStatisticsResponseEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssignations = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAssignationByGroupID(groupId);
        setAssignations(data);
      } catch (err: any) {
        setError(err.message || 'Error al obtener las asignaciones');
      } finally {
        setLoading(false);
      }
    };

    fetchAssignations();
  }, [groupId]);

  return { assignations, loading, error };
};