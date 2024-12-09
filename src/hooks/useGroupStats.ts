import { useState, useEffect } from 'react';
import { getGroupStatistics } from '../services/groupService';
import { GetGroupStatisticsResponse, ErrorResponse } from '../types';

const useGetGroupStatistics = (groupId: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [statistics, setStatistics] = useState<GetGroupStatisticsResponse | null>(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      setLoading(true);
      setError(null);
      try {
        const statisticsData = await getGroupStatistics(groupId);
        setStatistics(statisticsData);
      } catch (err) {
        setError(err as ErrorResponse);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, [groupId]);

  return { statistics, loading, error };
};

export default useGetGroupStatistics;