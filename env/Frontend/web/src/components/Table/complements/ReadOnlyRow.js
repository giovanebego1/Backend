import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.date}</td>
      <td>{contact.description}</td>
      <td>{contact.value}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Editar
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Deletar
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
