import { Button } from 'commons/components'
import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import FormEWalletForm from '../components/FormEWalletForm'

const EWalletForm = props => {

  return  (
	<div>
		<FormEWalletForm
			{...props}
		/> 
	</div>
  ) 
}

export default EWalletForm

