import { Button } from 'commons/components'
import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import FormRetailOutletForm from '../components/FormRetailOutletForm'

const RetailFormRetailOutletForm = props => {

  return  (
	<div>
		<FormRetailOutletForm
			{...props}
		/> 
	</div>
  ) 
}

export default RetailFormRetailOutletForm

