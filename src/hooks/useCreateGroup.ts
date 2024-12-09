import { useState } from 'react';
import { createGroup } from '../services/groupService';
import { GroupResponseEntity, CreateGroupResponse } from '../types';

const useCreateGroup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [group, setGroup] = useState<CreateGroupResponse | null>(null);

  const handleCreateGroup = async (groupData: GroupResponseEntity) => {
    setLoading(true);
    setError(null);
    try {
      const createdGroup = await createGroup(groupData);
      setGroup(createdGroup);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { group, loading, error, handleCreateGroup };
};

export default useCreateGroup;