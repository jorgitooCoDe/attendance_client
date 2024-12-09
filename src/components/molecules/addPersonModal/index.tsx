import React, { useState, ChangeEvent, FormEvent } from 'react';
import Modal from '../modal';
import useAddPersonToGroup from '../../../hooks/useAddPerson';
import { AddPersonToGroupRequest } from '../../../types';
import Input from '../../atoms/input';

type AddPersonToGroupModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddPersonToGroupModal: React.FC<AddPersonToGroupModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AddPersonToGroupRequest>({
    personId: '',
    firstName: '',
    lastName: '',
    phone: '',
    groupId: 0
  });

  const { person, loading, error, handleAddPersonToGroup } = useAddPersonToGroup();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'groupId' ? Number(value) : value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddPersonToGroup(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Person to Group" size="small">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm mx-auto">
        <Input
          type="text"
          name="personId"
          value={formData.personId}
          onChange={handleChange}
          placeholder="Person ID"
          className="p-2 border border-gray-300 rounded"
          variant='secondary'
        />
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="p-2 border border-gray-300 rounded"
          variant='secondary'
        />
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="p-2 border border-gray-300 rounded"
          variant='secondary'
        />
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="p-2 border border-gray-300 rounded"
          variant='secondary'
        />
        <Input
          type="number"
          name="groupId"
          value={formData.groupId.toString()}
          onChange={handleChange}
          placeholder="Group ID"
          className="p-2 border border-gray-300 rounded"
          variant='secondary'
        />
        <button type="submit" disabled={loading} className="bg-blue-500 text-white p-2 rounded w-full">
          {loading ? 'Adding...' : 'Add Person'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
      {person && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Person Added</h2>
          <p>ID: {person.person.code}</p>
          <p>Name: {person.person.firstName} {person.person.lastName}</p>
          <p>Email: {person.person.email}</p>
          <p>Phone: {person.person.phone}</p>
          <p>State: {person.person.state}</p>
        </div>
      )}
    </Modal>
  );
};

export default AddPersonToGroupModal;