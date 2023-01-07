import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

//INTERNAL IMPORT
import { CheckIfWalletConnected, connectWaller, connectingWithContract } from '../Utils/apiFeature'

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({ children }) => {
    const title = "Hey welcome to blockchain Chat App";

    return (
        <ChatAppProvider.provider value = {{ title }}>
            {children}
        </ChatAppProvider.provider>
    )
}
