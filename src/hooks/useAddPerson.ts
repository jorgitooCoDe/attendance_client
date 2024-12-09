import { useState } from 'react';
import { addPersonToGroup } from '../services/personService';
import { AddPersonToGroupRequest, AddPersonToGroupResponse, ErrorResponse } from '../types';

const useAddPersonToGroup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [person, setPerson] = useState<AddPersonToGroupResponse | null>(null);

  const handleAddPersonToGroup = async (personData: AddPersonToGroupRequest) => {
    setLoading(true);
    setError(null);
    try {
      const addedPerson = await addPersonToGroup(personData);
      setPerson(addedPerson);
    } catch (err) {
      setError(err as ErrorResponse);
    } finally {
      setLoading(false);
    }
  };

  return { person, loading, error, handleAddPersonToGroup };
};

export default useAddPersonToGroup;