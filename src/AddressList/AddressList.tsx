import { ReactElement } from "react";
import "./AddressList.css"

interface AddressListProps {
    addresses: string[];
}

const AddressList: (arg: AddressListProps) => ReactElement = ({addresses}) => {
    return <div>{
        addresses.map(address => 
            <div className={address.length === 0 ? 'error' : ''}>
                {address || 'invalid input'}
            </div>
        )
    }</div>
}

export default AddressList;