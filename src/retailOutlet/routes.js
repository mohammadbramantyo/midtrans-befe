import RequireAuth from 'commons/auth/RequireAuth'

import RetailOutletForm from './containers/RetailOutletForm'
import KonfirmasiRetailOutletPage from './containers/KonfirmasiRetailOutletPage'

const retailOutletRoutes = [
	{ 
		path: "/retailoutlet/confirmation",
		element: <KonfirmasiRetailOutletPage />,
	},
	{ 
		path: "/retailOutlet",
		element: <RetailOutletForm />,
	}
]

export default retailOutletRoutes
