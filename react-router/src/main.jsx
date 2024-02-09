import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom'
import './index.css'
import Blue from './Blue.jsx'
import Red from './Red.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			
			{
				path: '/red',
				element: <Red />,
			},
			{
				path: '/blue',
				element: <Blue />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
