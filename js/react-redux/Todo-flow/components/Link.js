import React from  'react'

export type Props = {
	active: boolean,
	children?: React$Element<any>,
	onClick: () => void
};

const Link = ({onClick,active,children}) => {
	if (active) {
		return <span>{children}</span>
	}

	return (
			<a href="#" onClick={e=> {e.preventDefault() 
									 onClick()}}>
				{children}
			</a> 
		)
}


export default Link 