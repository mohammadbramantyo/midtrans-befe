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

import virtualAccount from '../services/RetailOutlet'

const FormRetailOutletForm = ({ }) => {
	const { control, handleSubmit } = useForm()


	const navigate = useNavigate()

	const kirim = (data) => {
		const cleanData = cleanFormData(data)
		virtualAccount({
			...cleanData,

		})
			.then(({ data: { data } }) => {
				navigate(`/retailoutlet/confirmation`, { state: data })
			})
			.catch((error) => {
				toast.error(error.response?.data?.data?.message || error || 'Terjadi kesalahan pada sistem. Harap coba lagi!');
			});
	}

	return (
		<Form
			title="Retail Outlet Form "
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
						isRequired={true}
					/>
				)}
			/>
			<Controller
				name="retailOutlet"
				control={control}
				render={({ field, fieldState }) => (
					<SelectionField
						label="Retail Outlet"
						options={[
							{ id: 'alfamart', name: 'alfamart' },
							{ id: 'indomaret', name: 'indomaret' },
						]}
						placeholder="Masukkan retail outlet"
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

export default FormRetailOutletForm
