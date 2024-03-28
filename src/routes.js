import paymentLinkRoutes from 'paymentLink/routes'

import virtualAccountRoutes from 'virtualAccount/routes'

import { useRoutes } from 'react-router-dom'
import commonRoutes from 'commons/routes.js'
import userRoutes from 'user/routes'
import roleRoutes from 'role/routes'
import staticPageRoutes from 'staticPage/routes'
import EWalletRoutes from 'Ewallet/routes'
import retailOutletRoutes from 'retailOutlet/routes'

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,

	...paymentLinkRoutes, 
	...virtualAccountRoutes, 
	...EWalletRoutes,
	...retailOutletRoutes
  ])
  return router
}

export default GlobalRoutes
