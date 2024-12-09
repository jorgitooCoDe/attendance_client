import { useState } from 'react';
import { addManagerToGroup } from '../services/managerService';
import { AddManagerToGroupRequest, AddManagerToGroupResponse, ErrorResponse } from '../types';

const useAddManagerToGroup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [manager, setManager] = useState<AddManagerToGroupResponse | null>(null);

  const handleAddManagerToGroup = async (managerData: AddManagerToGroupRequest) => {
    setLoading(true);
    setError(null);
    try {
      const addedManager = await addManagerToGroup(managerData);
      setManager(addedManager);
    } catch (err) {
      setError(err as ErrorResponse);
    } finally {
      setLoading(false);
    }
  };

  return { manager, loading, error, handleAddManagerToGroup };
};

export default useAddManagerToGroup;