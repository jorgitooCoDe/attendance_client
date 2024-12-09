import { useState, useEffect } from 'react';
import { getAllGroups } from '../services/groupService';
import { GetAllGroupsResponse, ErrorResponse } from '../types';

const useGetAllGroups = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [groups, setGroups] = useState<GetAllGroupsResponse | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      setLoading(true);
      setError(null);
      try {
        const groupsData = await getAllGroups();
        setGroups(groupsData);
      } catch (err) {
        setError(err as ErrorResponse);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  return { groups, loading, error };
};

export default useGetAllGroups;