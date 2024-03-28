import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  TextAreaField,
  VisualizationAttr,
  
} from 'commons/components'
import { ALLOWED_PERMISSIONS, findAllowedPermission } from 'commons/constants/allowedPermission'
import cleanFormData from 'commons/utils/cleanFormData'

import ewallet from '../services/ewallet'

const FormEWalletForm = ({  }) => {
  const { control, handleSubmit } = useForm()


  const navigate = useNavigate()

  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    ewallet({
      ...cleanData,
      
    })
    .then(({ data: { data } }) => {
      navigate(`/ewallet/confirmation`, { state: data })
    })
    .catch((error) => {
      toast.error(error.response?.data?.data?.message || error || 'Terjadi kesalahan pada sistem. Harap coba lagi!');
    });
  }

  return (
    <Form 
	  title="EWallet Form" 
	  onSubmit={handleSubmit(kirim)}
	  >

		  <Controller
	        name="amount"
	        control={control}
	        render={({ field, fieldState }) => (
			  <InputField
	            label="Jumlah"
	            placeholder="Masukkan jumlah"
				type="number"
	            fieldState={fieldState}
				{...field}
				isRequired={false}
	          />
	        )}
	      />
		  <Controller
	        name="ewalletType"
	        control={control}
	        render={({ field, fieldState }) => (
			  <InputField
	            label="E-Wallet"
	            placeholder="Masukkan nama E-Wallet"
	            fieldState={fieldState}
				{...field}
				isRequired={true}
	          />
	        )}
	      />
		  <Controller
	        name="phone_number"
	        control={control}
	        render={({ field, fieldState }) => (
			  <InputField
	            label="Nomor Telepon"
	            placeholder="Masukkan Nomor HP"
	            fieldState={fieldState}
				{...field}
				isRequired={true}
	          />
	        )}
	      />
		<div className="card-actions justify-end">
			<Button type="submit" variant="primary">Kirim</Button>
		</div>
    </Form>
  )
}

export default FormEWalletForm
