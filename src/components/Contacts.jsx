import React from "react";
import contacts from "../contacts.json";
function Contacts() {
    const maxContactsToShow = 5; 
    const rowsStyle = {
        margin: '10px 40px',
        display: 'flex',
        width: '100px'
    };
    const pictureStyle = {
        margin: '10px 40px',
        height: '100px',
        width: '130px'
    };
    const iconStyle = {
        margin: '10px 40px',
        height: '50px',
        width: '50px'
    };
    return (
        <div className="List">
            <table>
                <tr>
                    <td> <h3 style={rowsStyle}>Picture</h3></td>
                    <td> <h3 style={rowsStyle}>Name</h3></td>
                    <td> <h3 style={rowsStyle}>Popularity</h3></td>
                    <td> <h3 style={rowsStyle}>wonOscar</h3></td>
                    <td> <h3 style={rowsStyle}>wonEmmy</h3></td>
                </tr>
                {contacts.slice(0, maxContactsToShow).map(contact => (
                    <tr key={contact.id}>
                        <td><img style={pictureStyle} src={contact.pictureUrl} alt={contact.name} /></td>
                        <td> <p style={rowsStyle}>{contact.name}</p></td>
                        <td> <p style={rowsStyle}>{contact.popularity}</p></td>
                        <td>{contact.wonOscar && <img style={iconStyle} src='https://cdn-icons-png.flaticon.com/512/2617/2617955.png' alt={contact.name} />}</td>
                        <td>{contact.wonEmmy && <img style={iconStyle} src='https://cdn-icons-png.flaticon.com/512/2617/2617955.png' alt={contact.name} />}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default Contacts;
