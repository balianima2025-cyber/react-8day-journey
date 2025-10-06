// USER TABLE - Table rendering dengan sorting
import { useState } from 'react';
import { users as initialUsers } from './data/mockData';

const UserTable = () => {
  const [users, setUsers] = useState(initialUsers);
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const sortedUsers = [...users].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (sortDirection === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user =>
      user.id === userId 
        ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
        : user
    ));
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return '↕️';
    return sortDirection === 'asc' ? '⬆️' : '⬇️';
  };

  return (
    <div style={{
      border: '2px solid #9C27B0',
      borderRadius: '10px',
      padding: '25px',
      backgroundColor: '#fff',
      overflowX: 'auto'
    }}>
      <h3 style={{ marginBottom: '20px' }}>User Management ({users.length} users)</h3>
      
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse',
        fontSize: '14px'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#F3E5F5' }}>
            {[
              { field: 'name', label: 'Name' },
              { field: 'email', label: 'Email' },
              { field: 'role', label: 'Role' },
              { field: 'status', label: 'Status' },
              { field: 'actions', label: 'Actions' }
            ].map(column => (
              <th
                key={column.field}
                onClick={() => column.field !== 'actions' && handleSort(column.field)}
                style={{
                  padding: '12px',
                  textAlign: 'left',
                  borderBottom: '2px solid #9C27B0',
                  cursor: column.field !== 'actions' ? 'pointer' : 'default',
                  backgroundColor: column.field !== 'actions' && sortField === column.field ? '#E1BEE7' : 'transparent'
                }}
              >
                {column.label} {column.field !== 'actions' && getSortIcon(column.field)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(user => (
            <tr 
              key={user.id}
              style={{
                borderBottom: '1px solid #eee',
                ':hover': {
                  backgroundColor: '#f9f9f9'
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9f9f9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <td style={{ padding: '12px' }}>
                <strong>{user.name}</strong>
              </td>
              <td style={{ padding: '12px' }}>{user.email}</td>
              <td style={{ padding: '12px' }}>
                <span style={{
                  backgroundColor: 
                    user.role === 'Admin' ? '#FF9800' :
                    user.role === 'Editor' ? '#2196F3' : '#4CAF50',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}>
                  {user.role}
                </span>
              </td>
              <td style={{ padding: '12px' }}>
                <span style={{
                  color: user.status === 'Active' ? '#4CAF50' : '#f44336',
                  fontWeight: 'bold'
                }}>
                  {user.status === 'Active' ? '🟢' : '🔴'} {user.status}
                </span>
              </td>
              <td style={{ padding: '12px' }}>
                <button
                  onClick={() => toggleUserStatus(user.id)}
                  style={{
                    backgroundColor: user.status === 'Active' ? '#f44336' : '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '6px 12px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    marginRight: '5px'
                  }}
                >
                  {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => alert(`Editing ${user.name}`)}
                  style={{
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '6px 12px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Table Summary */}
      <div style={{
        marginTop: '15px',
        padding: '10px',
        backgroundColor: '#F3E5F5',
        borderRadius: '5px',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <span>
          <strong>Active:</strong> {users.filter(u => u.status === 'Active').length} users
        </span>
        <span>
          <strong>Admins:</strong> {users.filter(u => u.role === 'Admin').length} users
        </span>
        <span>
          Sorted by: {sortField} ({sortDirection})
        </span>
      </div>
    </div>
  );
};

export default UserTable;