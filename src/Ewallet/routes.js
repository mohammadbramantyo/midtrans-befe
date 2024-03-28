import RequireAuth from 'commons/auth/RequireAuth'

import EWalletForm from './containers/EWalletForm'
import KonfirmasiEWalletPage from './containers/KonfirmasiEWalletPage'

const EWalletRoutes = [
	{ 
		path: "/ewallet/confirmation",
		element: <KonfirmasiEWalletPage />,
	},
	{ 
		path: "/ewallet",
		element: <EWalletForm />,
	}
]

export default EWalletRoutes
