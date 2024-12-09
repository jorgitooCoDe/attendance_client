import React, { useState, ChangeEvent, FormEvent } from 'react';
import Modal from '../modal';
import useCreateGroup from '../../../hooks/useCreateGroup';
import { GroupResponseEntity } from '../../../types';
import Input from '../../atoms/input';

type CreateGroupModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateGroupModal: React.FC<CreateGroupModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<GroupResponseEntity>({
    name: '',
    description: '',
    amount_persons: 0,
    amount_sessions: 0
  });

  const { group, loading, error, handleCreateGroup } = useCreateGroup();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'amount_persons' || name === 'amount_sessions' ? Number(value) : value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCreateGroup(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Group" size='small'>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm mx-auto">
        <p className="text-sm text-gray-500">Nombre de grupo:</p>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Group Name"
          className="p-2 border border-gray-300 rounded"
          variant='secondary'
        />
        <p className="text-sm text-gray-500">Descripción del grupo:</p>
        <Input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Group Description"
          className="p-2 border border-gray-300 rounded"
          variant='secondary'
        />
        <p className="text-sm text-gray-500">Número de personas:</p>
        <Input
          type="number"
          name="amount_persons"
          value={formData.amount_persons.toString()}
          onChange={handleChange}
          placeholder="Amount of Persons"
          className="p-2 border border-gray-300 rounded"
          variant='secondary'
        />
        <p className="text-sm text-gray-500">Número de sesiones:</p>
        <Input
          type="number"
          name="amount_sessions"
          value={formData.amount_sessions.toString()}
          onChange={handleChange}
          placeholder="Amount of Sessions"
          className="p-2 border border-gray-300 rounded"
          variant='secondary'
        />
        <button type="submit" disabled={loading} className="bg-mto_gray text-white p-2 rounded w-full hover:bg-mto_red_light transition-colors">
          {loading ? 'Creating...' : 'Create Group'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
      {group && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Group Created</h2>
          <p>ID: {group.Id}</p>
          <p>Name: {group.name}</p>
          <p>Description: {group.description}</p>
          <p>Amount of Sessions: {group.amount_sessions}</p>
          <p>Amount of Persons: {group.amount_persons}</p>
        </div>
      )}
    </Modal>
  );
};

export default CreateGroupModal;