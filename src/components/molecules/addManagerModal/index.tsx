import React, { useState, ChangeEvent, FormEvent } from 'react';
import Modal from '../modal';
import useAddManagerToGroup from '../../../hooks/useAddManagerToGroup';
import { AddManagerToGroupRequest } from '../../../types';
import Input from '../../atoms/input';

type AddManagerToGroupModalProps = {
  isOpen: boolean;
  onClose: () => void;
  existingManagers: { id: number; name: string }[];
};

const AddManagerToGroupModal: React.FC<AddManagerToGroupModalProps> = ({ isOpen, onClose, existingManagers }) => {
  const [formData, setFormData] = useState<AddManagerToGroupRequest>({
    username: '',
    password: '',
    htop_seed: '',
    code_person: '',
    name: '',
    last_name: '',
    email: '',
    phone_number: '',
    group_id: 0
  });

  const [isCreatingNewManager, setIsCreatingNewManager] = useState<boolean>(false);
  const { manager, loading, error, handleAddManagerToGroup } = useAddManagerToGroup();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'group_id' ? Number(value) : value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddManagerToGroup(formData);
  };

  const handleSelectManager = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedManagerId = Number(e.target.value);
    if (selectedManagerId === -1) {
      setIsCreatingNewManager(true);
    } else {
      const selectedManager = existingManagers.find(manager => manager.id === selectedManagerId);
      if (selectedManager) {
        setFormData({
          ...formData,
          username: selectedManager.name,
          code_person: selectedManager.id.toString(),
          name: selectedManager.name,
          last_name: '',
          email: '',
          phone_number: '',
          group_id: formData.group_id
        });
        setIsCreatingNewManager(false);
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Manager to Group" size="medium">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md mx-auto">
        <label className="text-sm text-gray-500">Select Manager:</label>
        <select onChange={handleSelectManager} className="p-2 border border-gray-300 rounded">
          <option value="">Select an existing manager</option>
          {existingManagers.map(manager => (
            <option key={manager.id} value={manager.id}>
              {manager.name}
            </option>
          ))}
          <option value="-1">Create new manager</option>
        </select>

        {isCreatingNewManager && (
          <>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="p-2 border border-gray-300 rounded"
              variant='secondary'
            />
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="p-2 border border-gray-300 rounded"
              variant='secondary'
            />
            <Input
              type="text"
              name="htop_seed"
              value={formData.htop_seed}
              onChange={handleChange}
              placeholder="HTOP Seed"
              className="p-2 border border-gray-300 rounded"
              variant='secondary'
            />
            <Input
              type="text"
              name="code_person"
              value={formData.code_person}
              onChange={handleChange}
              placeholder="Code Person"
              className="p-2 border border-gray-300 rounded"
              variant='secondary'
            />
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-2 border border-gray-300 rounded"
              variant='secondary'
            />
            <Input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              className="p-2 border border-gray-300 rounded"
              variant='secondary'
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-2 border border-gray-300 rounded"
              variant='secondary'
            />
            <Input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-2 border border-gray-300 rounded"
              variant='secondary'
            />
          </>
        )}

        <Input
          type="number"
          name="group_id"
          value={formData.group_id.toString()}
          onChange={handleChange}
          placeholder="Group ID"
          className="p-2 border border-gray-300 rounded"
          variant='secondary'
        />
        <button type="submit" disabled={loading} className="bg-blue-500 text-white p-2 rounded w-full">
          {loading ? 'Adding...' : 'Add Manager'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
      {manager && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Manager Added</h2>
          <p>ID: {manager.manager.user_id}</p>
          <p>Name: {manager.manager.name}</p>
          <p>Email: {manager.manager.email}</p>
          <p>Username: {manager.manager.username}</p>
        </div>
      )}
    </Modal>
  );
};

export default AddManagerToGroupModal;