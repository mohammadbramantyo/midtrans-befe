import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from 'commons/auth';
import { Button, Detail, VisualizationAttr, Modal } from 'commons/components';


const KonfirmasiRetailOutlet = ({ data }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();


  return (
    <div className="card-body mx-auto w-full bg-white shadow-xl card not-prose">
      {/* Data Binding Virtual Data */}
	  <div className="grid grid-cols-2">
        <VisualizationAttr
          label={`Silahkan lakukan pembayaran di ${data?.retailOutlet} terdekat dengan menggunakan kode berikut`}
          content={data?.retailPaymentCode}
			
        />
	  </div>
      <div class="card-actions justify-end">
        {/* View Element Event Virtual Element*/}
      </div>
    </div>
  );
};

export default KonfirmasiRetailOutlet;
