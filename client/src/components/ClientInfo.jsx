import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';

export default function ClientInfo({ client }) {
  let iconStyles = { color: "#ffc061" };
  return (
    <>
      <h5 className='mt-5'>Client Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaIdBadge className='icon' style={iconStyles} /> {client.name}
        </li>
        <li className='list-group-item'>
          <FaEnvelope className='icon' style={iconStyles} /> {client.email}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' style={iconStyles} /> {client.phone}
        </li>
      </ul>
    </>
  );
}
