import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import KonfirmasiEWallet from '../components/KonfirmasiEWallet'
// import getdata from '../services/getdata'
import { useLocation } from 'react-router-dom'

const KonfirmasiEWalletPage = (props) => {
	const { state } = useLocation()
	const [data, setData] = useState()
	const {  } = useParams()

	useEffect(() => {
		// const fetchData = async () => {
		// 	const { data: data } = await getdata({ invalid })
		// 	setData(data.data)
		// }
		// fetchData()
		setData(state)
  	}, [])

	return data ? (
		<div className="prose max-w-screen-lg mx-auto p-6">
      		<h2>Konfirmasi E-Wallet</h2>
			<KonfirmasiEWallet {...{ data }} />
		</div>
	) : <></>
}

export default KonfirmasiEWalletPage

