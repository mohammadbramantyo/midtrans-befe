import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from 'commons/auth';
import { Button, Detail, VisualizationAttr, Modal } from 'commons/components';


const KonfirmasiEWallet = ({ data }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();


  return (
    <div className="card-body mx-auto w-full bg-white shadow-xl card not-prose">
      {/* Data Binding Payment Data */}
      <div className="grid grid-cols-2">
        {data && data.eWalletType === "qris" ? (
          <>
            <h1>Silahkan Scan QR-Code berikut</h1>
            <img src={data.eWalletUrl} alt="QR Code" />
          </>
        ) : (
          <VisualizationAttr
            label="Mohon selesaikan pembayaran di link berikut"
            content={data?.eWalletUrl}
          />
        )}
      </div>
      <div class="card-actions justify-end">
        {/* View Element Event Payment Element*/}
      </div>
    </div>
  );

};

export default KonfirmasiEWallet;
