import '@/styles/globals.css'
import { useState } from 'react';

import ZkappWorkerClient from './zkAppWorkerClient';
import { PublicKey, Field } from 'snarkyjs';

export default function App() {
  let [state, setState] = useState({
    zkAppWorkerClient: null as null | ZkappWorkerClient,
    hasWallet: null as null | boolean,
    hasBeenSetup: false,
    accountExists: false,
    currentNum: null as null | Field,
    publicKey: null as null | PublicKey,
    zkAppPublicKey: null as null | PublicKey,
    creatingTransaction: false,
  });

  return <div />
}
